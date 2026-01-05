import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-5 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy and Policy</p>
            </div>

            <div className="flex gap-3">
                {/* GitHub */}
                <a href="https://github.com/QueueU123" target="_blank" rel="noreferrer" className="social-icon">
                    <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/makxzcs/" target="_blank" rel="noreferrer" className="social-icon">
                    <img src="assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/marc-tabangay-a88681313/" target="_blank" rel="noreferrer" className="social-icon">
                    <img src="assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2"/>
                </a>
            </div>

            <p className="text-white-500">© 2025 Marc. All rights reserved</p>
        </section>
    )
}

export default Footer