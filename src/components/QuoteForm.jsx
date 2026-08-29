import { useState } from 'react'
import './QuoteForm.css'
export default function QuoteForm({title='Request Consultation'}){const [sent,setSent]=useState(false);
function submit(e){e.preventDefault();
setSent(true);
e.currentTarget.reset()}return (
<form className="quoteForm" onSubmit={submit}>
  <h3>
    {title}
  </h3>
  <label>
    Your Full Name
    <input required placeholder="Enter name"/>
  </label>
  <label>
    Building Type
    <select defaultValue="">
      <option value="" disabled>
        Select (e.g. Residential, Corporate)
      </option>
      <option>
        Residential
      </option>
      <option>
        Commercial
      </option>
      <option>
        Hospital
      </option>
      <option>
        Industrial
      </option>
    </select>
  </label>
  <label>
    Contact Number
    <input required placeholder="Enter phone number"/>
  </label>
  <button type="submit">
    {sent?'Request Sent ✓':'Submit Request'}
  </button>
</form>
)}
