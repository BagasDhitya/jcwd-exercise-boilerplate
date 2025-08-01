'use client';
import { use } from 'react'
import { Edit, Delete } from '@/components/icons/icons';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface Params {
    id: string;
}
export default function TodoDetail({ params }: { params: Promise<Params> }) {
    const { id: todoId } = use(params); // ✅ unwrap Promise with use()

    // TODO: Fetch or retrieve todo detail data using the id "todoId"
    // For now, using dummy data:
    const todo: Todo = {
        id: todoId,
        text: "Sample Todo Detail",
        completed: false,
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-start py-12 bg-gradient-to-b from-white to-pink-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Todo Detail</h1>
            <div className="w-full max-w-md bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-semibold mb-4">{todo.text}</h2>
                <p className="mb-6">
                    Status: <span className={`font-medium ${todo.completed ? 'text-green-600' : 'text-red-600'}`}>
                        {todo.completed ? 'Completed' : 'Pending'}
                    </span>
                </p>
                <div className="flex space-x-4">
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg"
                    // TODO: Add edit todo logic
                    >
                        <Edit fontSize="small" />
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                    // TODO: Add delete todo logic
                    >
                        <Delete fontSize="small" />
                    </button>
                </div>
            </div>
            {/* TODO: Add more interactive logic or additional details if needed */}
        </main>
    );
}
