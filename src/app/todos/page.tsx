import TodoItem from '@/components/todo-item/TodoItem';
import TodoInput from '@/components/todo-input/TodoInput';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start py-12 bg-gradient-to-b from-white to-pink-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">TODO LIST</h1>
            <TodoInput />

            <div className="w-full max-w-md mt-6 space-y-2">
                {/* TODO: Replace hardcoded items with mapped state list */}
                <TodoItem text="Buy Grocery" completed />
                <TodoItem text="Send Emails" />
                <TodoItem text="Go to Gym" />
                <TodoItem text="Study React" />
                <TodoItem text="Write Blog Post" />
            </div>
        </main>
    );
}
