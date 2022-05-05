import React from 'react'

function LandingPage() {
  return (
       <nav class="navbar">
        <div class="navbar-logo">
            <div class="navbar-logo-title">
                <h2>KERNEL UI</h2>
            </div>
            <div class="navbar-toggle">
                <div class="navbar-links ">
                    <a href="#">DOCS</a>
                </div>
                <div class="navbar-links ">
                    <a href="#"> HOME</a>
                </div>
                <div class="navbar-links ">
                    <a href="#"> GITHUB</a>
                </div>
                <div class="navbar-links ">
                    <button onclick="myFunction()"><i class="fas fa-moon"></i></button>
                </div>

            </div>

        </div>
    </nav>
      
  )
}

export default LandingPage