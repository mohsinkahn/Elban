import DonutCard from "../components/DonutCard";
import BarChart from "../components/BarChart";
import KpiTile from "../components/KpiTile";
import OrdersTable from "../components/OrdersTable";
import RecentActivity from "../components/RecentActivity";
import { useMemo } from "react";

export default function Home() {
  // dummy data (static)
  const donut1 = { series: [70, 30], colors: ["#2F6B66", "#DDEBE8"], value: "5,433", legend: ["Active Supplier", "Potential"] };
  const donut2 = { series: [65, 35], colors: ["#235C57", "#DDEBE8"], value: "5,433", legend: ["Active Client", "Potential"] };
  const donutPartners = { series: [36, 32, 32], colors: ["#2F6B66", "#9DC6BE", "#DDEBE8"], value: "23,456", legend: ["Logistics", "Custom & Comp", "Service Provider"] };

  const barCategories = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const barSeries = [
    { name: "Suppliers", data: [800, 1500, 2200, 3000, 2500, 3300, 2700, 2900, 2000, 2400, 2800, 3100] },
    { name: "Clients", data: [600, 1200, 2000, 2800, 2300, 3100, 2500, 2600, 1800, 2100, 2600, 3000] },
  ];

  const kpis = [
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
    { title: "Total Orders Delivered", value: "3,422" },
  ];

  const orders = Array.from({length: 5}).map((_,i) => ({
    id: `#54738${i}`,
    supplier: "ABC Company",
    client: "Company ABC",
    etd: "12/02/2023",
    eta: "12/02/2023",
    pm: "Sarah Khan",
    status: "In Progress",
    notes: "Request samples"
  }));

  const activities = [
    { avatar: "A", title: "Complaint Logged", desc: "On 10 September 2025, our team received ...", time: "02:23 AM" },
    { avatar: "B", title: "Added note", desc: "Supplier acknowledged issue and requested photos...", time: "01:10 AM" },
  ];

  return (
    <>
    <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-sm text-gray-500 mb-6">A real-time snapshot of suppliers, orders, finances, and performance.</p>

    <div className="p-6 lg:p-10 overflow-auto max-h-[calc(100vh-220px)]">
      
      {/* Top KPI row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DonutCard title="Total Suppliers" value={donut1.value} series={donut1.series} colors={donut1.colors} legendItems={donut1.legend} />
        <DonutCard title="Total Clients" value={donut2.value} series={donut2.series} colors={donut2.colors} legendItems={donut2.legend} />
        {kpis.map((k, idx) => (
          <KpiTile key={idx} title={k.title} value={k.value} />
        ))}
      </div>

      {/* main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* left big column (bar chart + orders) */}
        <div className="lg:col-span-2 space-y-4">
          <BarChart categories={barCategories} series={barSeries} />
          <OrdersTable rows={orders} />
        </div>

        {/* right column (partners donut + recent activity) */}
        <div className="space-y-4">
          <DonutCard title="Partners" value={donutPartners.value} series={donutPartners.series} colors={donutPartners.colors} legendItems={donutPartners.legend} />
          <RecentActivity items={activities} />
        </div>
      </div>
    </div>
    </>
  );
}
