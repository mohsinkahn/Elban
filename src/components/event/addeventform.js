import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import MultiSelectTags from "../MultiSelectTags";
import PaymentTermsSelectTag from "../PaymentTermsSelectTag";

export default function AddEventForm() {
    return (
        <main className="">
            <form className="space-y-8">
                {/* Header */}
                <header>
                    <h1 className="text-2xl font-semibold mb-1">Add Event</h1>
                    <p className="text-gray-600 text-sm">
                       Add a new events to your network.
                    </p>
                </header>

                {/* Company Information */}
                <div className="overflow-auto max-h-[calc(100vh-310px)] p-1">
                    <section>
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                            Event Details
                        </h2>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Event Name</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Event Type</label>
                               <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Event Size</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Frequency</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">VAT ID / Tax number</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Organizer Name</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Organizer Contact Person</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Official Website</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Select Client </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Start Date</label>
                                <input
                                    type="date"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">End Date</label>
                                <input
                                    type="date"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-3">
                                <label htmlFor="" className="text-[#202E2D] ">Legal Form</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-3">
                                <label htmlFor="" className="text-[#202E2D] ">Country</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-3">
                                <label htmlFor="" className="text-[#202E2D] ">City</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-3">
                                <label htmlFor="" className="text-[#202E2D] ">Postal Code</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-3">
                                <label htmlFor="" className="text-[#202E2D] ">Street</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4">
                           
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Event Venue Address</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>

                        </div>
                    </section>

                    {/* Commercial and Financial Data */}
                    <section className="mt-5">
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                            Participation Details
                        </h2>
                        <div className="grid grid-cols-4 gap-4">

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Ticket Price</label>
                               <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Booth Rental Cost</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Booth Construction Limitations</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Booth Equipment Cost</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Additional Fees</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Logistics Arrangements</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Registration Deadline</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Online Registration Required</label>
                               <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">ID Badge / Entry Ticket Needed</label>
                               <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Promo Material Guidelines</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Responsible Person</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Due Dates</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                        </div>
                       
                    </section>


                    <section className="mt-5">
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                           Exhibitor Benefits & Services
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Participation Type</label>
                                  <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Online Meeting Booking Platform </label>
                                  <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Online Meeting Booking Platform </label>
                                  <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Translator / Hostess Available </label>
                                  <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Promotional Materials from Organizer </label>
                                  <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </section>

                    <section className="mt-5">
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                            Categorization
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Participation Type</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Industry Scope </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                       <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Attendee Types</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                       <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                           
                        </div>

                     <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                             <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Participation Goal</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                       <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Preparation Status</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                       <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                     

                        </div>


                        <div className="grid  grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">General Notes</label>
                                <textarea
                                rows={3}
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                          

                        </div>
                    </section>


                    
                </div>
                {/* Buttons */}
                <section className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add
                    </button>
                </section>

            </form>
        </main>
    );
}
