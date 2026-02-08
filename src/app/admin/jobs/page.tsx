'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'

interface Job {
  id: string
  slug: string
  title: string
  department: string
  type: string
  published: boolean
}

export default function AdminJobsList() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('この求人を削除しますか？')) return
    await fetch(`/api/admin/jobs/${id}`, { method: 'DELETE' })
    setJobs(jobs.filter((j) => j.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">採用情報</h1>
        <Link href="/admin/jobs/new" className="inline-flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" />新規作成
        </Link>
      </div>

      {loading ? (
        <div className="text-gray-500">読み込み中...</div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500 mb-4">求人がありません</p>
          <Link href="/admin/jobs/new" className="text-accent-600 font-medium hover:text-accent-700">最初の求人を作成 →</Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">職種名</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">部署</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">雇用形態</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">状態</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{job.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{job.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{job.type}</td>
                  <td className="px-6 py-4">
                    {job.published ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded"><Eye className="w-3 h-3" />公開</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"><EyeOff className="w-3 h-3" />下書き</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/jobs/${job.id}`} className="p-2 text-gray-400 hover:text-primary-800 transition-colors"><Edit className="w-4 h-4" /></Link>
                      <button onClick={() => handleDelete(job.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
