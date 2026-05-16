import { useDraggable } from '@dnd-kit/core';

export default function TaskCard({ task, onDeleteTask }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 50,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-stone-50/90 backdrop-blur-md border border-stone-200/60 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all cursor-grab active:cursor-grabbing select-none group flex items-start justify-between gap-3"
    >
      <div className="flex-1">
        <h4 className="text-stone-800 font-semibold text-sm mb-1 tracking-tight">{task.title}</h4>
        <p className="text-stone-500 text-xs leading-relaxed">{task.description}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDeleteTask(task.id);
        }}
        className="text-stone-400 hover:text-rose-600 p-1 rounded-lg hover:bg-rose-50 transition-colors shrink-0 md:opacity-0 group-hover:opacity-100 focus:opacity-100"
        title="Delete task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  );
}