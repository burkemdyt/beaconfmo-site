'use client'

import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { 'Content-Type': 'application/json' },
      })
      const json = await res.json()

      if (json.status === 'success') {
        setStatus('success')
        setMessage("We'll be in touch within one business day.")
      } else {
        setStatus('error')
        setMessage(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Connection error. Please email us at info@beaconfmo.com')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal-mid border border-[rgba(184,146,42,0.12)] rounded-[6px] p-8 lg:p-10 reveal reveal-d2">
      <div className="font-serif text-[24px] font-semibold text-white mb-8">
        Start Your Contracting Request
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="form-label" htmlFor="fname">First Name</label>
          <input id="fname" name="fname" type="text" className="form-input" placeholder="James" required />
        </div>
        <div>
          <label className="form-label" htmlFor="lname">Last Name</label>
          <input id="lname" name="lname" type="text" className="form-input" placeholder="Wilson" required />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" className="form-input" placeholder="james@example.com" required />
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" className="form-input" placeholder="(404) 555-0100" required />
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="product">Primary Product Interest</label>
        <select id="product" name="product" className="form-select">
          <option value="">Select a product type</option>
          <option>Fixed Indexed Annuities (FIA)</option>
          <option>Multi-Year Guaranteed (MYGA)</option>
          <option>Single Premium Immediate (SPIA)</option>
          <option>Income Rider Products</option>
          <option>All Annuity Products</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="form-label" htmlFor="volume">Approximate Annual Premium Volume</label>
        <select id="volume" name="volume" className="form-select">
          <option value="">Select range</option>
          <option>Under $500K</option>
          <option>$500K – $1M</option>
          <option>$1M – $3M</option>
          <option>$3M – $5M</option>
          <option>$5M+</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className={`form-submit ${
          status === 'success' ? '!bg-[#2e6b22] !text-white' : ''
        }`}
      >
        {status === 'submitting'
          ? 'Submitting...'
          : status === 'success'
          ? 'Request Submitted \u2713'
          : 'Submit Contracting Request \u2192'}
      </button>

      {message && (
        <p
          className={`mt-4 text-[14px] ${
            status === 'success' ? 'text-[#2e6b22]' : 'text-[#c0392b]'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  )
}
