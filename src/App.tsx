import { useForm, type FieldValues } from 'react-hook-form'

const App = () => {
    const { register, handleSubmit } = useForm()

    const onFormSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        {...register('name')}
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        className="border border-gray-200 px-4 py-2 rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="age">Age</label>
                    <input
                        {...register('age')}
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        className="border border-gray-200 px-4 py-2 rounded-xl"
                    />
                </div>
                <button
                    type="submit"
                    className="p-4 px-6 mt-4 bg-gray-800 text-white rounded-xl"
                >
                    Save
                </button>
            </form>
        </div>
    )
}

export default App
