import '../styles/Pages/Contact.css';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact__title'>
				<h3>Message me</h3>
				<div className='contact__staight'></div>
			</div>
			<p className='contact__info'>
				If you want to write me, talk to me about a project collaboration or
				just say hi, fill up the awesome form below or send an email to
				kingjamesegun@gmail.com and ~let's talk.
			</p>
			<form className='form'  method="POST" action="https://formsubmit.co/cdd3376cc5ac1b0038d33f8710feabe0">
				<div className='form_details row'>
					<div className='form_name col-lg-6 col-md-6 col-xs-12'>
						<label>Name</label>
						<input type='text' className='form__input' name='name'/>
					</div>
					<div className='form_email col-lg-6 col-md-6 col-xs-12'>
						<label>Email</label>
						<input type='email' className='form__input' name="email" />
					</div>
				</div>
				<div className='form__message'>
					<label>Message</label>
					<textarea name='message'></textarea>
				</div>
				<button className='form__submit'>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
