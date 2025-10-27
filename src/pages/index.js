import React, { useState, useMemo } from 'react';
import { ChevronDown, EllipsisVertical, Plus, Search, Users, ShoppingBag, DollarSign, Activity, Truck, Archive,Filter,ListFilter } from 'lucide-react';

const tailwindConfig = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'primary-teal': '#2F6B66', // Deep Teal
          'light-teal': '#DDEBE8',   // Very light background for charts/badges
          'medium-teal': '#9DC6BE',  // Medium teal
          'dark-teal': '#235C57',    // Darker teal for secondary elements
        },
        boxShadow: {
            'custom': '0 1px 3px rgba(0, 0, 0, 0.05)',
        }
      }
    }
  }
`;
const recent_activity = [
  {
    time: "01:23 AM",
    type: "Complaint Logged",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#EAB919" fillOpacity="0.12" />
      <g clipPath="url(#clip0_139_16175)">
        <path
          d="M12 9.33301V11.9997M12 14.6663H12.0067M5.33333 9.6815V14.3178C5.33333 14.4809 5.33333 14.5624 5.35175 14.6392C5.36808 14.7072 5.39502 14.7722 5.43157 14.8319C5.4728 14.8991 5.53045 14.9568 5.64575 15.0721L8.92758 18.3539C9.04288 18.4692 9.10053 18.5269 9.16781 18.5681C9.22746 18.6047 9.29249 18.6316 9.36051 18.6479C9.43724 18.6663 9.51877 18.6663 9.68183 18.6663H14.3182C14.4812 18.6663 14.5628 18.6663 14.6395 18.6479C14.7075 18.6316 14.7725 18.6047 14.8322 18.5681C14.8995 18.5269 14.9571 18.4692 15.0724 18.3539L18.3542 15.0721C18.4695 14.9568 18.5272 14.8991 18.5684 14.8319C18.605 14.7722 18.6319 14.7072 18.6482 14.6392C18.6667 14.5624 18.6667 14.4809 18.6667 14.3178V9.6815C18.6667 9.51844 18.6667 9.43691 18.6482 9.36019C18.6319 9.29216 18.605 9.22713 18.5684 9.16748C18.5272 9.10021 18.4695 9.04256 18.3542 8.92726L15.0724 5.64543C14.9571 5.53013 14.8995 5.47248 14.8322 5.43125C14.7725 5.3947 14.7075 5.36776 14.6395 5.35143C14.5628 5.33301 14.4812 5.33301 14.3182 5.33301H9.68183C9.51877 5.33301 9.43724 5.33301 9.36051 5.35143C9.29249 5.36776 9.22746 5.3947 9.16781 5.43125C9.10053 5.47248 9.04288 5.53013 8.92758 5.64543L5.64575 8.92726C5.53045 9.04256 5.4728 9.10021 5.43157 9.16748C5.39502 9.22713 5.36808 9.29216 5.35175 9.36019C5.33333 9.43691 5.33333 9.51844 5.33333 9.6815Z"
          stroke="#EAB919"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_139_16175">
          <rect width={16} height={16} fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
    ,
    author: "Alex Will",
    description:
      "On 10 September 2025, our team received a shipment of 50 units of ceramic floor tiles from the supplier. Upon inspection, we discovered that all 50 units were either cracked, chipped, or otherwise damaged during transit. The packaging appeared insufficient to protect the items, and several boxes showed signs of rough handling. This issue has delayed the ongoing renovation project and requires an urgent replacement or credit adjustment. Supporting images have been uploaded for verification.",
  },
  {
    time: "01:23 AM",
    type: "Added note",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#4EC483" fillOpacity="0.12" />
      <g clipPath="url(#clip0_139_16184)">
        <path
          d="M9 11.9997L11 13.9997L15 9.99967M18.6667 11.9997C18.6667 15.6816 15.6819 18.6663 12 18.6663C8.3181 18.6663 5.33333 15.6816 5.33333 11.9997C5.33333 8.31778 8.3181 5.33301 12 5.33301C15.6819 5.33301 18.6667 8.31778 18.6667 11.9997Z"
          stroke="#4EC483"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_139_16184">
          <rect width={16} height={16} fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
    ,
    author: "Alex Will",
    description: "Supplier acknowledged issue and requested photos for verification",
  },
  {
    time: "01:23 AM",
    type: "Added negotiation note",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#E1F930" fillOpacity="0.12" />
      <path
        d="M6 9.2C6 8.07989 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799C7.51984 6 8.0799 6 9.2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.07989 18 9.2V12.8C18 13.9201 18 14.4802 17.782 14.908C17.5903 15.2843 17.2843 15.5903 16.908 15.782C16.4802 16 15.9201 16 14.8 16H13.1225C12.7065 16 12.4984 16 12.2995 16.0408C12.123 16.0771 11.9521 16.137 11.7917 16.219C11.6108 16.3114 11.4483 16.4413 11.1235 16.7012L9.53317 17.9735C9.25578 18.1954 9.11708 18.3063 9.00036 18.3065C8.89885 18.3066 8.80282 18.2604 8.73949 18.1811C8.66667 18.0898 8.66667 17.9122 8.66667 17.557V16C8.04669 16 7.7367 16 7.48236 15.9319C6.79218 15.7469 6.25308 15.2078 6.06815 14.5176C6 14.2633 6 13.9533 6 13.3333V9.2Z"
        stroke="#F4EC00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    ,
    author: "Alex Will",
    description: "Supplier acknowledged issue and requested photos for verification",
  },
  {
    time: "01:23 AM",
    type: "Uploaded file — Proforma Invoice.pdf",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#B2BEC9" fillOpacity="0.12" />
      <path
        d="M6.66667 18L6.66667 6.66667M6.66667 12.6667H11.6C11.9734 12.6667 12.1601 12.6667 12.3027 12.594C12.4281 12.5301 12.5301 12.4281 12.594 12.3027C12.6667 12.1601 12.6667 11.9734 12.6667 11.6V7.06667C12.6667 6.6933 12.6667 6.50661 12.594 6.36401C12.5301 6.23856 12.4281 6.13658 12.3027 6.07266C12.1601 6 11.9734 6 11.6 6H7.73333C7.35997 6 7.17328 6 7.03067 6.07266C6.90523 6.13658 6.80325 6.23856 6.73933 6.36401C6.66667 6.50661 6.66667 6.6933 6.66667 7.06667V12.6667ZM12.6667 7.33333H16.9333C17.3067 7.33333 17.4934 7.33333 17.636 7.406C17.7614 7.46991 17.8634 7.5719 17.9273 7.69734C18 7.83995 18 8.02663 18 8.4V12.9333C18 13.3067 18 13.4934 17.9273 13.636C17.8634 13.7614 17.7614 13.8634 17.636 13.9273C17.4934 14 17.3067 14 16.9333 14H13.7333C13.36 14 13.1733 14 13.0307 13.9273C12.9052 13.8634 12.8032 13.7614 12.7393 13.636C12.6667 13.4934 12.6667 13.3067 12.6667 12.9333V7.33333Z"
        stroke="#B2BEC9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    ,
    author: "Alex Will",
  },
  {
    time: "01:23 AM",
    type: "Uploaded file — Proforma Invoice.pdf",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#B2BEC9" fillOpacity="0.12" />
      <path
        d="M6.66667 18L6.66667 6.66667M6.66667 12.6667H11.6C11.9734 12.6667 12.1601 12.6667 12.3027 12.594C12.4281 12.5301 12.5301 12.4281 12.594 12.3027C12.6667 12.1601 12.6667 11.9734 12.6667 11.6V7.06667C12.6667 6.6933 12.6667 6.50661 12.594 6.36401C12.5301 6.23856 12.4281 6.13658 12.3027 6.07266C12.1601 6 11.9734 6 11.6 6H7.73333C7.35997 6 7.17328 6 7.03067 6.07266C6.90523 6.13658 6.80325 6.23856 6.73933 6.36401C6.66667 6.50661 6.66667 6.6933 6.66667 7.06667V12.6667ZM12.6667 7.33333H16.9333C17.3067 7.33333 17.4934 7.33333 17.636 7.406C17.7614 7.46991 17.8634 7.5719 17.9273 7.69734C18 7.83995 18 8.02663 18 8.4V12.9333C18 13.3067 18 13.4934 17.9273 13.636C17.8634 13.7614 17.7614 13.8634 17.636 13.9273C17.4934 14 17.3067 14 16.9333 14H13.7333C13.36 14 13.1733 14 13.0307 13.9273C12.9052 13.8634 12.8032 13.7614 12.7393 13.636C12.6667 13.4934 12.6667 13.3067 12.6667 12.9333V7.33333Z"
        stroke="#B2BEC9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    ,
    author: "Alex Will",
  },
];

// --- Reusable UI Components (Encapsulated) ---

// 1. Dropdown component used in multiple cards
const CardDropdown = ({ title, options }) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="flex items-center text-xs text-gray-500 cursor-pointer p-1 rounded-lg hover:bg-gray-100 transition border-gray-200 border">
      {selected}
      <ChevronDown className="w-3 h-3 ml-1" />
    </div>
  );
};

// 2. KpiTile Component
const KpiTile = ({ title, value }) => {
  return (
    <div className="flex flex-col justify-between p-4 bg-white rounded-xl shadow-custom border border-gray-100">
      <div className="flex justify-between  mb-2 items-center">
        <div>
          <h3 className="text-sm font-medium text-[#636d6c] mb-2">{title}</h3>
          <p className="text-2xl font-medium text-[#485453]">{value}</p>
        </div>

        <div className="p-1 rounded-full bg-light-teal">

          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="22" fill="#355E5B" fill-opacity="0.12" />
            <rect x="6" y="6" width="32" height="32" rx="16" fill="#355E5B" fill-opacity="0.12" />
            <path d="M29.0833 18.0648L22 22M22 22L14.9166 18.0648M22 22L22 29.9167M29.5 25.3821V18.6179C29.5 18.3323 29.5 18.1896 29.4579 18.0622C29.4207 17.9496 29.3599 17.8462 29.2795 17.7589C29.1886 17.6603 29.0638 17.591 28.8142 17.4523L22.6475 14.0264C22.4112 13.8951 22.293 13.8295 22.1679 13.8037C22.0571 13.7809 21.9429 13.7809 21.8321 13.8037C21.707 13.8295 21.5888 13.8951 21.3525 14.0264L15.1858 17.4523C14.9362 17.591 14.8114 17.6603 14.7205 17.759C14.6401 17.8462 14.5793 17.9496 14.5421 18.0622C14.5 18.1896 14.5 18.3323 14.5 18.6179V25.3821C14.5 25.6677 14.5 25.8104 14.5421 25.9378C14.5793 26.0504 14.6401 26.1538 14.7205 26.2411C14.8114 26.3397 14.9362 26.409 15.1858 26.5477L21.3525 29.9736C21.5888 30.1049 21.707 30.1705 21.8321 30.1963C21.9429 30.2191 22.0571 30.2191 22.1679 30.1963C22.293 30.1705 22.4112 30.1049 22.6475 29.9736L28.8142 26.5477C29.0638 26.409 29.1886 26.3397 29.2795 26.2411C29.3599 26.1538 29.4207 26.0504 29.4579 25.9378C29.5 25.8104 29.5 25.6677 29.5 25.3821Z" stroke="#355E5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
      </div>

    </div>
  );
};

// 3. DonutChart SVG Helper (Simplifies drawing 2 or 3 segments)
const DonutChartSvg = ({ series, colors, size = 120, strokeWidth = 15 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let accumulatedOffset = 0;

  const segments = series.map((percentage, index) => {
    const segmentLength = (percentage / 100) * circumference;
    const offset = circumference - accumulatedOffset;
    accumulatedOffset += segmentLength;

    return (
      <circle
        key={index}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke={colors[index] || '#ccc'}
        strokeWidth={strokeWidth}
        strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
        strokeDashoffset={-offset}
        strokeLinecap="round"
        className="transition-all duration-500 ease-out"
      />
    );
  });

  // Final circle to fill the remaining gap (if any, like in a two-part chart)
  const totalPercentage = series.reduce((a, b) => a + b, 0);
  if (totalPercentage < 100) {
    segments.push(
      <circle
        key="remaining"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke="#DDEBE8" // Default background color
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} 0`}
        strokeDashoffset={0}
        strokeLinecap="round"
        style={{ zIndex: -1 }}
      />
    );
  }

  // Reverse the order for correct overlapping visual effect
  segments.reverse();

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Base gray circle */}
      <circle r={radius} cx={size / 2} cy={size / 2} fill="transparent" stroke=" #235c57" strokeWidth={strokeWidth} />

      {segments}
    </svg>
  );
};


// 4. DonutCard Component
const DonutCard = ({ title, value, series, colors, legendItems }) => {
  const totalValue = value.replace(/,/g, '');
  const total = parseInt(totalValue, 10);

  return (
    <div className="bg-white rounded-xl shadow-custom border border-gray-100 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b  pb-3 border-gray-100">
        <h3 className="text-base font-medium text-gray-800">{title}</h3>
        <CardDropdown title="Period" options={['Last month', 'Last quarter', 'This year']} />
      </div>

      <div className="flex items-center space-x-6">
        {/* Chart Area */}
        <div className="relative flex-shrink-0">
          <DonutChartSvg series={series} colors={colors} size={230} strokeWidth={24} />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-xl font-medium text-gray-800">{value}</span>
            <span className="text-xs text-gray-500">{title.includes("Partners") ? "Total Users" : "Users"}</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-2">
          {legendItems.map((item, index) => {
            const percentage = series[index] || 0;
            const count = Math.round((percentage / 100) * total).toLocaleString();

            return (
              <div key={index} className=" items-center border border-gray-200 rounded-xl px-1 py-1">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors[index] }}></span>
                  <span className="text-xs text-gray-600 font-thin">{item}</span>
                </div>
                <span className="text-xs text-gray-800 font-normal  pl-[15px]">
                  {title.includes("Partners") ? `${percentage}%` : count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// 5. BarChart Component (Simplified visualization without a full chart library)
const BarChart = ({ categories, series }) => {
  const maxDataValue = Math.max(...series.flatMap(s => s.data));
  const scale = 250 / maxDataValue; // Max height for bars is 250px
  const [activeSeries, setActiveSeries] = useState('Suppliers');

  return (
    <div className="bg-white rounded-xl shadow-custom border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 ">Total Orders</h2>
        <div className="flex items-center space-x-3 text-xs">
          {series.map(s => (
            <button
              key={s.name}
              onClick={() => setActiveSeries(s.name)}
              className={`px-3 py-1 rounded-lg transition ${s.name === activeSeries
                ? 'bg-primary-teal text-gray-400 shadow-md'
                : 'text-gray-500 hover:bg-gray-100'
                }`}
            >
              {s.name}
            </button>
          ))}
          <CardDropdown title="Period" options={['Week', 'Month', 'Year']} />
        </div>
      </div>

      {/* Bar Chart Area */}
      <div className="h-[250px] relative overflow-x-scroll">
        {/* Y-Axis Labels (Simplified) */}
        {['1K', '2K', '3K', '4K', '5K'].map((label, i) => (
          <div key={i} className="absolute left-0 text-xs text-gray-400" style={{ bottom: `${(i + 1) * 20}%` }}>{label}</div>
        ))}
        <div className="absolute left-0 text-xs text-gray-400 bottom-0">0</div>

        {/* X-Axis and Bars */}
        <div className="absolute right-0 bottom-0 left-8 flex items-end justify-between border-b border-gray-300 h-full pb-0.5">
          {categories.map((category,  i) => {
            const dataPoint = series.find(s => s.name === activeSeries)?.data[i] || 0;
            const height = (dataPoint * scale) || 0;
            const barHeight = Math.max(height, 5); // Ensure visibility for 0

            return (
              <div key={category} className="flex flex-col items-center justify-end h-full px-1">
                {/* Bar */}
                <div
                  className="w-4 rounded-t-sm transition-all duration-300"
                  style={{ height: `${barHeight}px`, backgroundColor: '#2F6B66' }}
                  title={`${activeSeries}: ${dataPoint.toLocaleString()}`}
                ></div>
                {/* X-Axis Label */}

                <span className="text-xs text-gray-500 pt-1">{category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// 6. OrdersTable Component
const OrdersTable = ({ rows }) => {
  const headers = ["Order ID", "Supplier Name", "Client Name", "ETD", "ETA", "Assigned PM", "Status", "Notes"];

  const StatusBadge = ({ status }) => (
    <span className={`px-2 py-0.5 text-xs font-normal rounded-md ${status === 'In Progress' ? 'bg-gray-100 text[#4195A4]' : 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );

  return (
    <div className="bg-white rounded-xl shadow-custom border border-gray-100 overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-full bg-light-teal text-primary-teal font-semibold w-6 h-6 flex items-center justify-center text-xs">
             <button className="bg-white text-black rounded-[8px] h-[30px] w-[30px] flex items-center justify-center cursor-pointer">
            <ListFilter className="w-4 h-4" />
          </button>
          </div>
          <button className="bg-red-500 text-white rounded-[8px] h-[30px] w-[30px] flex items-center justify-center hover:bg-red-600 cursor-pointer">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-600"></th>
              {headers.map((header) => (
                <th key={header} className="px-4 py-4 text-left text-xs font-semibold text-gray-600 whitespace-nowrap">
                  {header}
                </th>
              ))}
              <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((order, i) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input type="checkbox" className="rounded text-primary-teal focus:ring-primary-teal" />
                </td>
                <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-400 font-normal">{order.id}</td>
                <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-400">{order.supplier}</td>
                <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-400">{order.client}</td>
                <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-400">{order.etd}</td>
                <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-400">{order.eta}</td>
                <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <div className="p-1 rounded-sm bg-light-teal text-primary-teal font-normal w-5 h-5 flex items-center justify-center text-[10px] flex-shrink-0">S</div>
                    <span>{order.pm}</span>
                  </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500"><StatusBadge status={order.status} /></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{order.notes}</td>
                <td className="px-4 py-2 text-right text-sm font-medium">
                  <EllipsisVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination (Simplified) */}
      <div className="p-3 flex justify-center items-center text-sm text-gray-600 border-t border-gray-200">
        
        <div className="flex items-center space-x-1 ml-4">
          <button className="px-2 py-1  rounded bg-gray-100">{'<'}</button>
          {[1, 2, 3, 4, 5, '...', 10, 11].map(page => (
            <button key={page} className={`px-2 py-1 rounded ${page === 1 ? 'bg-primary-teal text-white' : 'hover:bg-gray-100'}`}>
              {page}
            </button>
          ))}
          <button className="px-2 py-1  rounded bg-gray-100">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

// 7. RecentActivity Component
const RecentActivity = ({ items }) => {
  return (
    <div className="bg-white rounded-xl shadow-custom border border-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        <CardDropdown title="Filter" options={['All', 'My Activity']} />
      </div>

      <div className="space-y-4">
         <div className="overflow-auto max-h-[calc(100vh-469px)] p-4">

        <p className="text-sm text-gray-500 mb-6">Aug 20, 2022 – Today</p>

        <div className="relative border-l border-gray-200">
          {recent_activity.map((log, index) => (
            <div key={index} className="mb-8 ml-6 relative">
              {/* Timeline dot */}
              <span className="absolute -left-[37px] top-2">
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#355E5B"
                    fillOpacity="0.32"
                  />
                  <circle cx="12.5" cy={12} r={8} fill="#355E5B" fillOpacity="0.9" />
                </svg>

              </span>

              {/* Time */}
              <p className="text-xs text-gray-500 mb-2">{log.time}</p>

              {/* Card */}
              <div className="border border-[#EAECF0] rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-2 mb-1 bg-[#FAFAFA] p-2 border border-[#EAECF0A3] rounded mb-4">
                  {log.icon}
                  <span className="text-[14px] font-medium text-[#202E2DA8]">{log.type}</span>
                </div>
                <p className="text-[14px] text-[202E2D99] mb-2">By {log.author}</p>
                {log.description && (
                  <p className="text-sm text-[#202E2D99] leading-relaxed">{log.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

// 8. Main App Component (Using user's provided structure and data)
export default function App() {
  const donut1 = useMemo(() => ({ series: [70, 30], colors: ["#BFD5D4", "#DDEBE8"], value: "5,433", legend: ["Active Supplier", "Potential Supplier"] }), []);
  const donut2 = useMemo(() => ({ series: [70, 35], colors: ["#BFD5D4", "#DDEBE8"], value: "5,433", legend: ["Active Clients", "Potential Clients"] }), []);
  const donutPartners = useMemo(() => ({ series: [36, 32, 32], colors: ["#2F6B66", "#9DC6BE", "#DDEBE8"], value: "23,456", legend: ["Logistics", "Custom & Comp", "Service Provider"] }), []);

  const barCategories = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], []);
  const barSeries = useMemo(() => [
    { name: "Suppliers", data: [800, 1500, 2200, 3000, 2500, 3300, 2700, 2900, 2000, 2400, 2800, 3100] },
    { name: "Clients", data: [600, 1200, 2000, 2800, 2300, 3100, 2500, 2600, 1800, 2100, 2600, 3000] },
  ], []);

  // Updated to reflect the values in the image (4 unique KPI cards shown)
  const kpis = useMemo(() => [
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
  ], []);

  const orders = useMemo(() => Array.from({ length: 5 }).map((_, i) => ({
    id: `#54738${i + 1}`,
    supplier: "ABC Company",
    client: "Company ABC",
    etd: "12/02/2023",
    eta: "12/02/2023",
    pm: "Sarah Khan",
    status: "In Progress",
    notes: "Request samples"
  })), []);

  const activities = useMemo(() => [
    { avatar: "A", title: "Complaint Logged", desc: "On 10 September 2025, our team received a shipment of 50 units of ceramic floor tiles from the supplier. Upon inspection, we discovered that all 50 units were either cracked, chipped, or otherwise damaged during transit. The packaging appeared insufficient to protect the items, and several boxes showed signs of rough handling. This issue has resulted in a critical delay...", time: "02:23 AM" },
    { avatar: "B", title: "Added note", desc: "Supplier acknowledged issue and requested photos for verification. Supporting images have been uploaded for verification...", time: "01:10 AM" },
  ], []);

  return (
    <>
      <div className="min-h-screen  text-gray-800">
        <div className=" mx-auto p-4 md:p-6 lg:p-8">

          <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
          <p className="text-sm text-gray-500 mb-6 border-b border-gray-200 pb-3">A real-time snapshot of suppliers, orders, finances, and performance.</p>

          <div className="overflow-y-scroll max-h-[calc(100vh-260px)] pb-4">

            {/* Top KPI row (6 items, using lg:grid-cols-6 for compact desktop view) */}
            <div className="lg:flex lg:justify-between grid grid-cols-1 gap-4 mb-6 ">
              {/* Donut Cards */}
              <div className="lg:col-span-2 flex-1 leg">
                <div className="grid grid-cols-1 md:grid-cols-[420px_420px] gap-4">
                  <DonutCard title="Total Suppliers" value={donut1.value} series={donut1.series} colors={donut1.colors} legendItems={donut1.legend} />
                  <DonutCard title="Total Clients" value={donut2.value} series={donut2.series} colors={donut2.colors} legendItems={donut2.legend} />
                </div>

              </div>
              <div className="lg:col-span-2 flex-1 grid grid-cols-1 lg:grid-cols-2  gap-4">
                {/* KPI Tiles (4 items) */}
                {kpis.map((k, idx) => (
                  <KpiTile key={idx} title={k.title} value={k.value} />
                ))}
              </div>

              {/* KPI Tiles (4 items) - forcing 4 items into the remaining 2 columns by using nested grid on the parent container (grid-cols-6) and then lg:col-span-2 for the container */}
              {/* Reverting to user's layout structure to avoid complex nesting: 2 DonutCard, 4 KpiTile, max 4 cols. Items will wrap. */}



            </div>

            {/* Main Grid (Bar Chart, Orders, Partners Donut, Activity) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Left Big Column (lg:col-span-2) */}
              <div className="lg:col-span-2 space-y-6">
                <BarChart categories={barCategories} series={barSeries} />
                <OrdersTable rows={orders} />
              </div>

              {/* Right Column (lg:col-span-1) */}
              <div className="space-y-6">
                <DonutCard title="Partners" value={donutPartners.value} series={donutPartners.series} colors={donutPartners.colors} legendItems={donutPartners.legend} />
                <RecentActivity items={activities} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind and Custom Config */}
      {/* <script src="https://cdn.tailwindcss.com"></script>
      <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} /> */}
    </>
  );
}
