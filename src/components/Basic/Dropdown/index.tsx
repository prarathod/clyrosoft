import React, { useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Option {
  value: string;
  label: string;
}

interface DynamicDropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string | string[]) => void;
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  error?: string | null;
  className?: string;
  initialValue?: string | string[];
}

const Dropdown: React.FC<DynamicDropdownProps> = ({
  options = [],
  placeholder = "Select an option",
  onSelect,
  multiple = false,
  searchable = true,
  disabled = false,
  loading = false,
  error = null,
  className = "",
  initialValue = "",
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | string[]>(
    multiple ? initialValue || [] : initialValue || ""
  );

  useEffect(() => {
    if (initialValue !== undefined) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const handleSelect = (currentValue: string) => {
    if (multiple) {
      const newValue = Array.isArray(value)
        ? value.includes(currentValue)
          ? value.filter((v) => v !== currentValue)
          : [...value, currentValue]
        : [currentValue];
      setValue(newValue);
      onSelect(newValue);
    } else {
      setValue(currentValue);
      onSelect(currentValue);
      setOpen(false);
    }
  };

  const displayValue = multiple
    ? Array.isArray(value) && value.length > 0
      ? `${value.length} selected`
      : placeholder
    : (value as string) || placeholder;

  return (
    <div className="relative w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between", className)}
            disabled={disabled || loading}
          >
            {displayValue}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0"
          style={{ width: "var(--radix-popover-trigger-width)" }}
        >
          {loading ? (
            <div className="py-6 text-center text-sm">Loading...</div>
          ) : (
            <Command className="w-full">
              {searchable && <CommandInput placeholder="Search options..." />}
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          multiple && Array.isArray(value)
                            ? value.includes(option.value)
                              ? "opacity-100"
                              : "opacity-0"
                            : value === option.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          )}
        </PopoverContent>
      </Popover>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Dropdown;
