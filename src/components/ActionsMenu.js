"use client";
import { useState, useRef, useEffect } from "react";
import { MoreVertical, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

export default function ActionsMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Click outside بند کرنے کے لیے
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-1 rounded hover:bg-gray-200"
            >
                <svg
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
                        stroke="#202E2D"
                        strokeOpacity="0.6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.5 6C13.0523 6 13.5 5.55228 13.5 5C13.5 4.44772 13.0523 4 12.5 4C11.9477 4 11.5 4.44772 11.5 5C11.5 5.55228 11.9477 6 12.5 6Z"
                        stroke="#202E2D"
                        strokeOpacity="0.6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.5 20C13.0523 20 13.5 19.5523 13.5 19C13.5 18.4477 13.0523 18 12.5 18C11.9477 18 11.5 18.4477 11.5 19C11.5 19.5523 11.9477 20 12.5 20Z"
                        stroke="#202E2D"
                        strokeOpacity="0.6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {open && (
                <div className="absolute right-[25px] mt-2 w-32 bg-white border rounded border-[#EAECF0] z-20">
                    <Link href="/client"
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                            // handle view
                            console.log("View clicked");
                            setOpen(false);
                        }}
                    >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                    </Link>

                    <button
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                            // handle edit
                            console.log("Edit clicked");
                            setOpen(false);
                        }}
                    >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                    </button>

                    <button
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={() => {
                            // handle delete
                            console.log("Delete clicked");
                            setOpen(false);
                        }}
                    >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
