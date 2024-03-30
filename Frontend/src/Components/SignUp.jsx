import React, { useState } from 'react';

const ApplicationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [recommendationLetter, setRecommendationLetter] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [parentsPhoneNumber, setParentsPhoneNumber] = useState('');
  const [dateOfCompletion, setDateOfCompletion] = useState('');
  const [previousFieldStudy, setPreviousFieldStudy] = useState('');
  const [gpa, setGpa] = useState('');
  const [photo, setPhoto] = useState(null);
  const [eeueeResult, setEeueeResult] = useState('');
  const [englishProficiency, setEnglishProficiency] = useState('');
  const [extracurricularActivity, setExtracurricularActivity] = useState('');
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [preferredFieldOfStudy, setPreferredFieldOfStudy] = useState('');
  const [preferredCountryOfStudy, setPreferredCountryOfStudy] = useState('');
  const [noticePreference, setNoticePreference] = useState('');
  const [bankStatementPhoto, setBankStatementPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or perform other actions
    console.log({
      fullName,
      email,
      phoneNumber,
      address,
      recommendationLetter,
      educationLevel,
      parentsPhoneNumber,
      dateOfCompletion,
      previousFieldStudy,
      gpa,
      photo,
      eeueeResult,
      englishProficiency,
      extracurricularActivity,
      passportPhoto,
      preferredFieldOfStudy,
      preferredCountryOfStudy,
      noticePreference,
      bankStatementPhoto,
    });
  };

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handlePassportPhotoChange = (e) => {
    setPassportPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleBankStatementPhotoChange = (e) => {
    setBankStatementPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit}>

      <input className='text-blue' type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <textarea placeholder="Letter of Recommendation" value={recommendationLetter} onChange={(e) => setRecommendationLetter(e.target.value)} />
      <input type="text" placeholder="Current Education Level" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} />
      <input type="tel" placeholder="Parent's Phone Number" value={parentsPhoneNumber} onChange={(e) => setParentsPhoneNumber(e.target.value)} />
      <input type="date" placeholder="Date of Completion" value={dateOfCompletion} onChange={(e) => setDateOfCompletion(e.target.value)} />
      <input type="text" placeholder="Previous Field of Study" value={previousFieldStudy} onChange={(e) => setPreviousFieldStudy(e.target.value)} />
      <input type="number" placeholder="GPA" value={gpa} onChange={(e) => setGpa(e.target.value)} />
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && <img src={photo} alt="Chosen Photo" />}
      <input type="number" placeholder="EEUEE Result" value={eeueeResult} onChange={(e) => setEeueeResult(e.target.value)} />
      <input type="text" placeholder="English Proficiency" value={englishProficiency} onChange={(e) => setEnglishProficiency(e.target.value)} />
      <textarea placeholder="Extracurricular Activity" value={extracurricularActivity} onChange={(e) => setExtracurricularActivity(e.target.value)} />
      <input type="file" accept="image/*" onChange={handlePassportPhotoChange} />
      {passportPhoto && <img src={passportPhoto} alt="Passport Photo" />}
      <input type="text" placeholder="Preferred Field of Study" value={preferredFieldOfStudy} onChange={(e) => setPreferredFieldOfStudy(e.target.value)} />
      <select  placeholder="Preferred Country of Study" value={preferredCountryOfStudy} onChange={(e) => setPreferredCountryOfStudy(e.target.value)}>
        <option value="">val 1 </option>
        <option value="">val 1 </option>
        <option value="">val 1 </option>
      </select>
      

      <select placeholder="Notice Preference" value={noticePreference} onChange={(e) => setNoticePreference(e.target.value)}>
        <option value="">val 1 </option>
        <option value="">val 1 </option>
        <option value="">val 1 </option>
      </select>
      <input type="file" accept="image/*" onChange={handleBankStatementPhotoChange} />
      {bankStatementPhoto && <img src={bankStatementPhoto} alt="Bank Statement Photo" />}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplicationForm;
