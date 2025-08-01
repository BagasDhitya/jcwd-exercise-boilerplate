'use client';

import { Add } from '@/components/icons/icons';

export default function TodoInput() {
    return (
        <div className="flex items-center w-full max-w-md mx-auto mt-6">
            <input
                type="text"
                placeholder="Enter Task"
                className="flex-grow border-2 border-purple-600 focus:outline-none rounded-l-xl px-4 py-2 text-lg"
            // TODO: Bind this input with state
            />
            <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-xl"
            // TODO: Add logic to add new task
            >
                <Add />
            </button>
        </div>
    );
}
