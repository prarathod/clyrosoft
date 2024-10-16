import React, { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
  onSelect: () => void;
  shortcut?: string;
  disabled?: boolean;
}

interface CommandGroup {
  heading?: string;
  items: CommandItem[];
}

interface Theme {
  bg: string;
  text: string;
  hoverBg: string;
  separator: string;
}

interface DynamicCommandProps {
  isDialog?: boolean;
  placeholder?: string;
  emptyMessage?: string;
  data: CommandGroup[];
  theme?: Partial<Theme>;
  className?: string;
  onClose?: () => void;
}

const defaultTheme: Theme = {
  bg: "bg-white dark:bg-gray-950",
  text: "text-gray-900 dark:text-gray-100",
  hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-800",
  separator: "bg-gray-200 dark:bg-gray-800",
};

export const CustomCommand: React.FC<DynamicCommandProps> = ({
  isDialog = false,
  placeholder = "Type a command or search...",
  emptyMessage = "No results found.",
  data,
  theme = {},
  className,
  onClose,
}) => {
  const [open, setOpen] = useState(false);
  const [magicText, setMagicText] = useState("");
  const mergedTheme = { ...defaultTheme, ...theme };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback(
    (command: () => void) => {
      setOpen(false);
      command();
      if (onClose) onClose();
    },
    [onClose]
  );

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      setMagicText("✨ Command magic activated! ✨");
    } else {
      setMagicText("🌟 Thanks for using the magic command! 🌟");
    }
    setTimeout(() => setMagicText(""), 3000);
    if (!newOpen && onClose) onClose();
  };

  const CommandComponent = () => {
    return (
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder={placeholder} />
        <CommandList>
          {data.map((group, index) => (
            <React.Fragment key={index}>
              <CommandGroup heading={group.heading}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.id}
                    disabled={item?.disabled}
                    onSelect={() => runCommand(item.onSelect)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.shortcut && (
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
          <CommandEmpty>{emptyMessage}</CommandEmpty>
        </CommandList>
      </Command>
    );
  };

  if (isDialog) {
    return (
      <>
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogContent className="overflow-scroll overflow-x-hidden h-[40vh] p-0">
            <div
              className={cn("rounded-lg shadow-md", mergedTheme.bg, className)}
            >
              <CommandComponent />
            </div>
          </DialogContent>
        </Dialog>
        {magicText && (
          <div className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce">
            <Sparkles size={20} />
            <span>{magicText}</span>
          </div>
        )}
      </>
    );
  }

  return <CommandComponent />;
};

