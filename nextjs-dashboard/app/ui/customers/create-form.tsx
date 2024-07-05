'use client';

import { createCustomer, CustomerState } from "@/app/lib/actions";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Button } from '@/app/ui/button';

export default function Form() {
    const initialState: CustomerState = { errors: {} };
    const [state, formAction] = useFormState(createCustomer, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Enter a name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                placeholder="Enter a name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Enter an email address
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="string"
                                placeholder="Enter an email address"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Enter an image url
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image_url"
                                name="image_url"
                                type="string"
                                placeholder="Enter an image url"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                href="/dashboard/customers"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                Cancel
                </Link>
                <Button type="submit">Create Invoice</Button>
            </div>

        </form>
    )
}