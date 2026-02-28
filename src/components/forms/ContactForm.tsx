import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
   user_name: string;
   user_email: string;
   subject: string;
   user_phone: number;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      subject: yup.string().required().label("Subject"),
      user_phone: yup.number()
         .transform((originalValue, originalObject) => {
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { t } = useTranslation();
   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('service_yvmrs1n', 'template_mg697cv',
            form.current, 'OB0j1AZNx8_U5GsHk')
            .then((result) => {
               toast(t('contactForm.successMessage'), { position: 'top-center' });
               reset();
               void result;
            }, () => {
               toast(t('contactForm.errorMessage'), { position: 'top-center' });
            });
      } else {
         // Form ref not available
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
         <div className="row">
            <div className="col-lg-6">
               <label>{t('contactForm.yourName')}</label>
               <input type="text" {...register("user_name")} placeholder={t('contactForm.yourName')} />
               <p className="form_error">{errors.user_name?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>{t('contactForm.yourEmail')}</label>
               <input type="email" {...register("user_email")} placeholder={t('contactForm.yourEmail')} />
               <p className="form_error">{errors.user_email?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>{t('contactForm.yourPhone')}</label>
               <input type="tel" {...register("user_phone")} placeholder={t('contactForm.yourPhone')} />
               <p className="form_error">{errors.user_phone?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>{t('contactForm.subject')}</label>
               <input type="text" {...register("subject")} placeholder={t('contactForm.subject')} />
               <p className="form_error">{errors.subject?.message}</p>
            </div>
            <div className="col-lg-12">
               <label>{t('contactForm.yourMessage')}</label>
               <textarea {...register("message")} placeholder={t('contactForm.writePlaceholder')}></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>
            <div className="col-lg-12">
               <button type="submit" className="primary-btn-1 btn-hover">
                  {t('contactForm.sendNow')} &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </button>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
