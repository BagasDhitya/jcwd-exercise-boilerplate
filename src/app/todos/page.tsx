import TodoItem from '@/components/todo-item/TodoItem';
import TodoInput from '@/components/todo-input/TodoInput';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start py-12 bg-gradient-to-b from-white to-pink-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">TODO LIST</h1>
            <TodoInput />

            <div className="w-full max-w-md mt-6 space-y-2">
                {/* TODO: Replace hardcoded items with mapped state list */}
                <TodoItem id='1' text="Buy Grocery" completed />
                <TodoItem id='2' text="Send Emails" />
                <TodoItem id='3' text="Go to Gym" />
                <TodoItem id='4' text="Study React" />
                <TodoItem id='5' text="Write Blog Post" />
            </div>
        </main>
    );
}
