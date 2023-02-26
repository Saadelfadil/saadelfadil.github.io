import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1028px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
            Contact
        </h1>
        <form action="" method="POST" encType="multipart/form-data" >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">Name</label>
                    <input className="r" type="text" name="name" />
                </div>
                <div>
                    <label className="uppercase text-sm py-2" htmlFor="">Phone Number</label>
                    <input className="r" type="text" name="phone" />
                </div>
            </div>
            <div>
                <label className="uppercase text-sm py-2" htmlFor="">Email</label>
                <input className="r" type="email" name="email"/>
            </div>
            <div>
                <label className="uppercase text-sm py-2" htmlFor="">Subject</label>
                <input className="r" type="text" name="subject"/>
            </div>
            <div>
                <label className="uppercase text-sm py-2" htmlFor="">Message</label>
                <textarea rows='10' name="message"></textarea>
            </div>

        </form>
    </div>
  )
};

export default Contact;
