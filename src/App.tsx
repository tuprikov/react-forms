import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z
        .string()
        .min(3, { message: 'Name must be at least 3 characters long' }),
    age: z
        .number({ message: 'Age must be a number' })
        .min(18, { message: 'Age must be at least 18' })
})

type FormData = z.infer<typeof schema>

const App = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onFormSubmit = (data: FormData) => {
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
                    {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="age">Age</label>
                    <input
                        {...register('age', { valueAsNumber: true })}
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        className="border border-gray-200 px-4 py-2 rounded-xl"
                    />
                    {errors.age && (
                        <p className="text-red-500">{errors.age.message}</p>
                    )}
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
