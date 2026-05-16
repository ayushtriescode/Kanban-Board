export const INITIAL_TASKS = [
  {
    id: "guide-1",
    title: "✨ Welcome! Try Dragging Me",
    description: "Click and hold down on this card, then slide it over to the 'In Progress' column to update its workflow status.",
    status: "backlog",
  },
  {
    id: "guide-2",
    title: "➕ Add Your Own Tasks",
    description: "Use the control input panel up top to type in a new milestone. It will dump straight into your Backlog list.",
    status: "backlog",
  },
  {
    id: "guide-3",
    title: "🗑️ Clean Up This Workspace",
    description: "Ready to work? Click the subtle delete symbol on the right side of this card to purge it from your disk completely.",
    status: "in-progress",
  },
];

export const COLUMNS = [
  { id: "backlog", title: "Backlog", color: "bg-rose-500/10 border-rose-500/20 text-rose-700" },
  { id: "in-progress", title: "In Progress", color: "bg-amber-500/10 border-amber-500/20 text-amber-700" },
  { id: "done", title: "Done", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-700" },
];