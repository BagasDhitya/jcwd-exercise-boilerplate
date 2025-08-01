'use client';

import { Edit, Delete } from '@/components/icons/icons';

interface TodoItemProps {
    text: string;
    completed?: boolean;
}

export default function TodoItem({ text, completed = false }: TodoItemProps) {
    return (
        <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border mb-2">
            <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 text-purple-600"
                // TODO: Add logic to toggle checkbox
                />
                <span className={`text-lg ${completed ? 'line-through text-gray-400' : 'text-black'}`}>
                    {text}
                </span>
            </div>
            <div className="flex space-x-2">
                <button
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg"
                // TODO: Add logic to edit task
                >
                    <Edit fontSize="small" />
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                // TODO: Add logic to delete task
                >
                    <Delete fontSize="small" />
                </button>
            </div>
        </div>
    );
}
