// Code to show breakpoints
// Display current window breakpoints

// function showBreakpoints() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   let breakpoint = '';
//   // Common breakpoints
//   if (width < 576) {
//     breakpoint = 'xs (Extra Small)';
//   } else if (width < 768) {
//     breakpoint = 'sm (Small)';
//   } else if (width < 992) {
//     breakpoint = 'md (Medium)';
//   } else if (width < 1200) {
//     breakpoint = 'lg (Large)';
//   } else {
//     breakpoint = 'xl (Extra Large)';
//   }

//   console.log(
//     `Current breakpoint: ${breakpoint} - Width: ${width}px, Height: ${height}px`
//   );

//   // Display breakpoints on page
//   const display =
//     document.getElementById('breakpoint-display') || createBreakpointDisplay();
//   display.innerHTML = `${breakpoint}<br>${width} x ${height}`;
// }

// function createBreakpointDisplay() {
//   const div = document.createElement('div');
//   div.id = 'breakpoint-display';
//   div.style.cssText = `
//         position: fixed;
//         top: 100px;
//         right: 20px;
//         background: rgba(0,0,0,0.4);
//         color: red;
//         padding: 8px 12px;
//         border-radius: 4px;
//         font-family: monospace;
//         font-size: 12px;
//         font-weight: bold;
//         z-index: 9999;
//         text-align: center;
//     `;
//   document.body.appendChild(div);
//   return div;
// }

// Show breakpoint on load and resize
// window.addEventListener('load', showBreakpoints);
// window.addEventListener('resize', showBreakpoints);

/**
 * Code for the navbar to change color when scroll and for the to-top button
 */
const navbar = document.querySelector('.navbar');
const btnToTop = document.querySelector('#to-top');

function userScroll() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('bg-secondary');
      navbar.classList.add('navbar-opacity');
      btnToTop.classList.add('show-btn');
    } else {
      navbar.classList.remove('bg-secondary');
      navbar.classList.remove('navbar-opacity');
      btnToTop.classList.remove('show-btn');
    }
  });
}

// Legacy code
// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// Actual code
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Function to intercept submit
 */
const form = document.getElementById('contactForm');
const state = document.getElementById('formState');

// Hide message after delay
function hideMessage(delay = 2000) {
  setTimeout(() => {
    state.classList.add('d-none');
  }, delay);
}

async function submitBtn(e) {
  e.preventDefault(); // oprește redirect-ul

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      state.classList.remove('d-none');
      state.textContent = 'Thank you! Your message has been sent.';
      hideMessage();
    } else {
      state.classList.remove('d-none');
      state.classList.replace('text-success', 'text-danger');
      state.textContent = 'An error occurred. Please try again.';
      hideMessage();
    }
  } catch (error) {
    state.classList.remove('d-none');
    state.classList.replace('text-success', 'text-danger');
    state.textContent = 'The message has not been sent. Try again later.';
    hideMessage();
  }
}

// Event Listners
document.addEventListener('DOMContentLoaded', userScroll);
// btnToTop.addEventListener('click', scrollToTop);
btnToTop.addEventListener('pointerup', scrollToTop);
form.addEventListener('submit', submitBtn);
