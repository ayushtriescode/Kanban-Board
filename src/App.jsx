import { useState, useEffect } from 'react';
import { INITIAL_TASKS, COLUMNS } from './initialData';
import Column from './components/Column';
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanban-tasks');
    return savedTasks ? JSON.parse(savedTasks) : INITIAL_TASKS;
  });
  
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  // Fixed Sensor Configuration
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250, 
        tolerance: 8,
      },
    })
  );

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: newTitle,
      description: newDesc || 'No description provided.',
      status: 'backlog',
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTitle('');
    setNewDesc('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const nextStatus = over.id;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-amber-50/40 to-orange-50/30 text-stone-800 p-6 md:p-12 font-sans selection:bg-amber-100">
      
      
      <header className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
            Workspace Dashboard
          </h1>
          <p className="text-stone-500 text-xs mt-0.5">Organize your operational pipeline in real-time.</p>
        </div>
      </header>

      <form onSubmit={handleAddTask} className="max-w-6xl mx-auto mb-10 p-4 bg-stone-50/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm flex flex-col md:flex-row gap-3 items-end">
        <div className="flex-1 w-full">
          <label className="block text-stone-500 text-[10px] font-bold uppercase tracking-wider mb-1.5 ml-1">Task Title</label>
          <input
            type="text"
            placeholder="What needs doing?"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full bg-white/90 border border-stone-200 rounded-xl px-3 py-2 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:bg-white transition-all"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-stone-500 text-[10px] font-bold uppercase tracking-wider mb-1.5 ml-1">Context Notes</label>
          <input
            type="text"
            placeholder="Add some details..."
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="w-full bg-white/90 border border-stone-200 rounded-xl px-3 py-2 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:bg-white transition-all"
          />
        </div>
        <button type="submit" className="w-full md:w-auto bg-stone-900 text-stone-50 hover:bg-stone-800 font-semibold text-sm px-6 py-2 rounded-xl transition-colors shadow-sm shrink-0 h-9.5">
          Create Card
        </button>
      </form>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {COLUMNS.map((column) => {
            const filteredTasks = tasks.filter((task) => task.status === column.id);

            return (
              <Column 
                key={column.id} 
                id={column.id} 
                title={column.title} 
                colorClass={column.color}
                tasks={filteredTasks} 
                onDeleteTask={handleDeleteTask}
              />
            );
          })}
        </main>
      </DndContext>
    </div>
  );
}