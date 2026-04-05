const App = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log('Hello React Form!');
            }}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        className="border border-gray-200 px-4 py-2 rounded-xl"
                    />
                    <button className="p-4 px-6 mt-4 bg-gray-800 text-white rounded-xl">Save</button>
                </div>
            </form>
        </div>
    )
}

export default App
