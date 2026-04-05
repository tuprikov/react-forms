const App = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Enter name" className="border border-gray-200 px-4 py-2 rounded-xl" />
                </div>
            </form>
        </div>
    )
}

export default App
