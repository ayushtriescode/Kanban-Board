import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';

export default function Column({ id, title, colorClass, tasks, onDeleteTask }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div 
      ref={setNodeRef} 
      className="flex flex-col w-full min-h-37.5 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200/60">
        <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg border ${colorClass}`}>
          {title}
        </span>
        <span className="bg-stone-200/50 text-stone-600 text-xs font-bold px-2 py-0.5 rounded-md border border-stone-300/30">
          {tasks.length}
        </span>
      </div>

      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
        {tasks.length === 0 && (
          <div className="flex flex-col items-center justify-center h-32 border border-dashed border-stone-300/60 rounded-xl bg-stone-50/30">
            <p className="text-stone-400 text-xs font-medium">No tasks logged</p>
          </div>
        )}
      </div>
    </div>
  );
}