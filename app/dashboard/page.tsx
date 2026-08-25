"use client";

import { useState } from "react";

const transactions = [
	["Whole Foods Market", "Groceries · Today, 10:42 AM", "-$86.42", "🛒", "bg-emerald-100"],
	["Salary deposit", "Income · Yesterday, 9:00 AM", "+$4,200.00", "↗", "bg-blue-100"],
	["Netflix", "Entertainment · May 24, 2024", "-$15.49", "▶", "bg-red-100"],
	["Uber ride", "Transport · May 23, 2024", "-$24.80", "◆", "bg-violet-100"],
];

export default function DashboardPage() {
	const [period, setPeriod] = useState("This month");
	const bars = [42, 58, 48, 75, 61, 82, 68, 92, 65, 78, 72, 84];

	return (
		<main className="min-h-screen bg-[#f7f8fa] px-5 py-6 font-sans text-slate-900 sm:px-10 lg:px-16">
			<div className="mx-auto max-w-7xl">
                {/* Add your dashboard content here */}
				<section className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-sm text-slate-400">
                            Monday, May 27, 2024
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Good morning, Linco 👋
                        </h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Here&apos;s your financial overview.
                        </p>
                    </div>
                    <button className="w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 hover:bg-slate-700">
                        + Add transaction
                    </button>
                </section>

				<section className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-200 md:col-span-2"><div className="flex justify-between"><div><p className="text-sm text-slate-400">Total balance</p><h2 className="mt-2 text-3xl font-bold">$12,840.52</h2></div><span className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-emerald-300">+8.4% ↗</span></div><div className="mt-9 flex items-end justify-between"><p className="text-xs text-slate-400">Compared to last month</p><svg viewBox="0 0 240 55" className="h-14 w-2/3"><path d="M0 43 C25 44 29 27 49 33 S76 14 96 27 S119 7 140 19 S160 27 177 12 S207 20 240 2" fill="none" stroke="#9ee6c0" strokeWidth="3" /></svg></div></div><div className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Available to spend</p><h2 className="mt-3 text-3xl font-bold">$2,460.30</h2><div className="mt-6 h-2 rounded-full bg-slate-100"><div className="h-2 w-[68%] rounded-full bg-emerald-400" /></div><p className="mt-3 text-xs text-slate-400"><b className="text-slate-700">68%</b> of your monthly budget used</p></div></section>

				<section className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]"><div className="rounded-2xl bg-white p-6 shadow-sm"><div className="mb-7 flex items-center justify-between"><div><h3 className="font-bold">Cash flow</h3><p className="mt-1 text-xs text-slate-400">Your income and spending over time</p></div><select value={period} onChange={(e) => setPeriod(e.target.value)} className="rounded-lg border-0 bg-slate-50 px-3 py-2 text-xs font-semibold outline-none"><option>This month</option><option>Last month</option><option>This year</option></select></div><div className="flex h-48 items-end gap-2 border-b border-slate-100">{bars.map((height, index) => <div key={index} style={{ height: `${height}%` }} className={`flex-1 rounded-t-md ${index === 7 ? "bg-slate-900" : "bg-emerald-200"}`} />)}</div><div className="mt-3 flex justify-between text-[10px] text-slate-400"><span>Jun 01</span><span>Jun 08</span><span>Jun 15</span><span>Jun 22</span><span>Jun 30</span></div><div className="mt-6 flex gap-5 text-xs"><span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300" />Income <b className="ml-1">$5,240</b></span><span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-slate-900" />Expenses <b className="ml-1">$2,180</b></span></div></div><div className="rounded-2xl bg-white p-6 shadow-sm"><div className="flex justify-between"><div><h3 className="font-bold">Spending overview</h3><p className="mt-1 text-xs text-slate-400">By category this month</p></div><button className="text-xs font-semibold text-slate-500">See all →</button></div><div className="mt-6 flex items-center gap-7"><div className="relative h-32 w-32 shrink-0 rounded-full" style={{ background: "conic-gradient(#172033 0 38%, #6ee7b7 38% 63%, #a78bfa 63% 78%, #fbbf24 78% 91%, #e2e8f0 91%)" }}><div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-white"><b className="text-xl">$2,180</b><span className="text-[10px] text-slate-400">spent</span></div></div><div className="w-full space-y-3 text-xs">{[["Housing", "$820"], ["Food", "$540"], ["Transport", "$330"], ["Fun", "$280"]].map(([name, amount]) => <div key={name} className="flex justify-between"><span>{name}</span><b>{amount}</b></div>)}</div></div></div></section>

				<section className="mt-6 rounded-2xl bg-white p-6 shadow-sm"><div className="mb-5 flex justify-between"><div><h3 className="font-bold">Recent transactions</h3><p className="mt-1 text-xs text-slate-400">Your latest money movements</p></div><button className="text-xs font-semibold text-slate-500">View all →</button></div><div className="divide-y divide-slate-100">{transactions.map(([name, detail, amount, icon, color]) => <div key={name} className="flex items-center justify-between py-3"><div className="flex items-center gap-3"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${color} font-bold`}>{icon}</div><div><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></div></div><p className={`text-sm font-bold ${amount.startsWith("+") ? "text-emerald-500" : "text-slate-800"}`}>{amount}</p></div>)}</div></section>
			</div>
		</main>
	);
}
