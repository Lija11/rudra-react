import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

interface FormData {
   user_name: string;
   user_email: string;
   user_phone: number;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      user_phone: yup.number()
         .transform((originalValue, originalObject) => {
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      message: yup.string().required().label("Message"),
   })
   .required();

const HomeContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('service_6y6yqwk', 'template_l7vv1mg',
            form.current, '0Nl20_gGiZ8xlkEt9')
            .then((result) => {
               const notify = () => toast('Message sent successfully', { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <div className="contact-content1">
         <div className="section-header mb-xxl-4 mb-4">
            <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
               <img src="assets/img/icon/section-step1.png" alt="img" /> Schadule
            </div>
            <h2 className="theme-clr4 fw-bold mb-xxl-3 mb-xl-2 mb-2 wow fadeInUp">Let’s Discuss How We Can
               <span className="fw-300">Transform Your
                  Life</span>
            </h2>
            <p className="theme-clr4 wow fadeInUp" data-wow-delay=".3s">Schedule a free consultation to
               discover personalized solutions from
               our financial experts.</p>
         </div>
         <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="row g-4">
               <div className="col-md-6">
                  <div className="form__grp">
                     <input className="form-control w-100" {...register("user_name")} type="text" placeholder="Full Name *" />
                     <p className="form_error">{errors.user_name?.message}</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="form__grp">
                     <input className="form-control w-100" {...register("user_email")} type="email" placeholder="Full Email *" />
                     <p className="form_error">{errors.user_email?.message}</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="form__grp">
                     <input className="form-control w-100" {...register("user_phone")} type="text" placeholder="Phone number *" />
                     <p className="form_error">{errors.user_phone?.message}</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="form__grp">
                     <textarea className="form-control w-100" {...register("message")} placeholder="Your comment *"
                        rows={4}></textarea>
                     <p className="form_error">{errors.message?.message}</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="form__grp wow fadeInUp" data-wow-delay=".3s">
                     <button type="button" className="theme-btn style1 pe-20">
                        <i
                           className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        Submit your message
                     </button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}

export default HomeContactForm
