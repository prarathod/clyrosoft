WITH cleaned_data AS (
  SELECT
      cr."contractID",
      jsonb_agg(element) AS updated_data
  FROM "Contracts_Review" cr,
       jsonb_array_elements(cr."JSONOutput"::jsonb) AS element
  WHERE 
      cr."date_of_insertion" = current_date
      AND (
          element->>'end' ~ '\\.'  -- Look for objects with "end" as a point value
          AND element->>'end' IS NOT NULL
      )
  GROUP BY cr."contractID"
)
UPDATE "Contracts_Review" cr
SET "JSONOutput" = cleaned_data.updated_data
FROM cleaned_data
WHERE cr."contractID" = cleaned_data."contractID";