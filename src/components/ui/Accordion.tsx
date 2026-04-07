"use client";

import { useState, useCallback } from "react";
import clsx from "clsx";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "shrink-0 transition-transform duration-300 ease-out",
        open && "rotate-180",
      )}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = useCallback(
    (index: number) => {
      setOpenIndexes((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        if (prev.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    },
    [allowMultiple],
  );

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);

        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className={clsx(
                "flex w-full items-center justify-between px-6 py-5",
                "text-left font-semibold text-forest",
                "transition-colors duration-200 hover:bg-gray-50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sage/30",
              )}
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <ChevronIcon open={isOpen} />
            </button>

            <div
              className={clsx(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
