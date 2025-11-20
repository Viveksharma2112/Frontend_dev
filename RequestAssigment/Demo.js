function getData() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Email:", email, "Password:", password);

    let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    
    if(email=="" || password==""){
        alert("Fields cannot be empty");
        return;
    }
    
    if (!email.includes("@")){
        alert("Invalid email format");
        return;
    }
    
    if(!email.match(emailpattern)){
        alert("Invalid email format");
        return;
    }
    
    if(!password.match(passwordpattern)){
        alert("Password must be 7-15 characters long and include at least one numeric digit and a special character");
        return;
    }
    
    // Validation successful - send to db.json using different methods
    // Uncomment the method you want to test:
    
    //loginWithXHR(email, password);        // Traditional XMLHttpRequest
    loginWithFetch(email, password);      // Modern Fetch API
    // loginWithJQuery(email, password);  // jQuery AJAX
    // loginWithAxios(email, password);   // Axios Library (Most Popular)
}

// ============================================================
// METHOD 1: XMLHttpRequest (XHR) - Traditional approach
// ============================================================
// Pros: Works in all browsers, more control over request
// Cons: Verbose syntax, callback-based (callback hell risk)
// Use case: Legacy browser support needed
function loginWithXHR(email, password){
    let formData = {
        username: email.split('@')[0],
        email: email,
        password: password
    };

    console.log("=== METHOD 1: XMLHttpRequest (XHR) ===");
    console.log("Form Data:", formData);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/login", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    xhr.onload = function() {
        if(xhr.status === 200 || xhr.status === 201) {
            console.log("\n✓ XHR Response:");
            console.log(JSON.parse(xhr.responseText));
            console.log("==================\n");
            alert("✓ XHR: Login successful! Data saved to db.json");
        } else {
            console.error("✗ XHR Error: Status", xhr.status);
            alert("Error saving data to server");
        }
    };
    
    xhr.onerror = function() {
        console.error("✗ XHR Network error");
        alert("Network error - Check if JSON server is running");
    };
    
    xhr.send(JSON.stringify(formData));
}

// ============================================================
// METHOD 2: Fetch API - Modern JavaScript approach
// ============================================================
// Pros: Clean syntax, promise-based, native JavaScript
// Cons: Not supported in very old browsers (IE), requires polyfill
// Use case: Modern web applications, best for new projects
function loginWithFetch(email, password){
    let formData = {
        username: email.split('@')[0],
        email: email,
        password: password
    };

    console.log("=== METHOD 2: Fetch API (Modern) ===");
    console.log("Form Data:", formData);

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("\n✓ Fetch Response:");
        console.log(data);
        console.log("Response ID:", data.id);
        console.log("==================\n");
        alert("✓ Fetch: Login successful! Data saved to db.json");
    })
    .catch(error => {
        console.error("✗ Fetch Error:", error.message);
        alert("Error: " + error.message);
    });
}

// ============================================================
// METHOD 3: jQuery AJAX - Library-based approach
// ============================================================
// Pros: Simple syntax, handles browser differences automatically
// Cons: Requires jQuery library (extra KB), overkill for simple requests
// Use case: Projects already using jQuery, cross-browser compatibility
function loginWithJQuery(email, password){
    let formData = {
        username: email.split('@')[0],
        email: email,
        password: password
    };

    console.log("=== METHOD 3: jQuery AJAX ===");
    console.log("Form Data:", formData);

    // Check if jQuery is loaded
    if (typeof jQuery === 'undefined') {
        alert("jQuery is not loaded! Add jQuery CDN to HTML first.");
        console.error("✗ jQuery not found");
        return;
    }

    $.ajax({
        url: 'http://localhost:3000/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(data) {
            console.log("\n✓ jQuery Response:");
            console.log(data);
            console.log("Response ID:", data.id);
            console.log("==================\n");
            alert("✓ jQuery: Login successful! Data saved to db.json");
        },
        error: function(xhr, status, error) {
            console.error("✗ jQuery Error:", status, error);
            alert("Error: " + error);
        }
    });
}

// ============================================================
// METHOD 4: Axios - Modern HTTP Client Library
// ============================================================
// Pros: Best features, automatic JSON, interceptors, timeout
// Cons: External library needed (13KB gzipped)
// Use case: Production apps, best developer experience
function loginWithAxios(email, password){
    let formData = {
        username: email.split('@')[0],
        email: email,
        password: password
    };

    console.log("=== METHOD 4: Axios (Production Grade) ===");
    console.log("Form Data:", formData);

    // Check if Axios is loaded
    if (typeof axios === 'undefined') {
        alert("Axios is not loaded! Add Axios CDN to HTML first.");
        console.error("✗ Axios not found");
        return;
    }

    // Axios automatically converts to JSON and handles errors better
    axios.post('http://localhost:3000/login', formData)
        .then(response => {
            console.log("\n✓ Axios Response:");
            console.log(response.data);        // Direct data access (no need for .json())
            console.log("Status:", response.status);
            console.log("Headers:", response.headers);
            console.log("==================\n");
            alert("✓ Axios: Login successful! Data saved to db.json");
        })
        .catch(error => {
            console.error("✗ Axios Error:");
            if (error.response) {
                // Server responded with error status
                console.error("Status:", error.response.status);
                console.error("Data:", error.response.data);
            } else if (error.request) {
                // Request made but no response
                console.error("No response received");
            } else {
                // Error in setting up request
                console.error("Error:", error.message);
            }
            alert("Error: " + error.message);
        });
}

// ============================================================
// DETAILED COMPARISON - XHR vs Fetch vs jQuery vs Axios (Hinglish)
// ============================================================
/*

═══════════════════════════════════════════════════════════════════════════
📌 1. XMLHttpRequest (XHR) - Purana Traditional Tarika
═══════════════════════════════════════════════════════════════════════════

🔹 KYA HAI?
   - JavaScript ka sabse purana method server se baat karne ke liye
   - 2006 se use ho raha hai, AJAX ka foundation
   - Callback-based approach (function ke andar function)

🔹 SYNTAX STYLE:
   const xhr = new XMLHttpRequest();
   xhr.open("POST", url, true);
   xhr.onload = function() { ... }
   xhr.send(data);

🔹 FAYDE (Pros):
   ✓ Har browser mein chalega (IE5 se bhi!)
   ✓ Progress events mil sakte hain (upload/download tracking)
   ✓ Request ko cancel kar sakte ho (xhr.abort())
   ✓ Timeout set kar sakte ho easily

🔹 NUKSAN (Cons):
   ✗ Bahut zyada code likhna padta hai (verbose)
   ✗ Callback hell ho sakta hai (nested callbacks)
   ✗ Error handling thoda complicated
   ✗ Code readable nahi lagta

🔹 KAB USE KARE?
   - Purane browsers support karna ho (IE 10 ya neeche)
   - File upload mein progress bar chahiye
   - Request ko beech mein cancel karna ho

🔹 REAL EXAMPLE:
   // E-commerce site: File upload with progress bar
   const xhr = new XMLHttpRequest();
   xhr.upload.addEventListener("progress", (e) => {
       let percent = (e.loaded / e.total) * 100;
       console.log(`Uploaded: ${percent}%`);
   });


═══════════════════════════════════════════════════════════════════════════
📌 2. Fetch API - Modern JavaScript Ka Tarika
═══════════════════════════════════════════════════════════════════════════

🔹 KYA HAI?
   - ES6 (2015) mein aaya, modern JavaScript ka part
   - Promise-based approach (clean aur readable)
   - Browser ka native feature (koi library nahi chahiye)

🔹 SYNTAX STYLE:
   fetch(url, {method: 'POST', body: data})
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error(error));

🔹 FAYDE (Pros):
   ✓ Clean aur simple syntax (kam code)
   ✓ Promise-based (async/await use kar sakte ho)
   ✓ Response handling built-in hai
   ✓ No external library needed
   ✓ Streaming support hai

🔹 NUKSAN (Cons):
   ✗ Internet Explorer mein nahi chalega
   ✗ Progress events nahi milte directly
   ✗ Request timeout built-in nahi hai
   ✗ Request cancel karne ke liye AbortController chahiye
   ✗ Network error pe only reject hota hai, 404/500 nahi

🔹 KAB USE KARE?
   - Modern web applications (React, Vue, Angular)
   - API calls jahan compatibility issue nahi
   - Clean code chahiye
   - Async/await pattern use karna ho

🔹 REAL EXAMPLE:
   // Social media app: Post ko like karna
   async function likePost(postId) {
       try {
           const response = await fetch(`/api/posts/${postId}/like`, {
               method: 'POST'
           });
           const data = await response.json();
           console.log(`Likes: ${data.likes}`);
       } catch (error) {
           console.error('Like failed:', error);
       }
   }


═══════════════════════════════════════════════════════════════════════════
📌 3. jQuery AJAX - Library-Based Tarika
═══════════════════════════════════════════════════════════════════════════

🔹 KYA HAI?
   - jQuery library ka part (30KB extra size)
   - 2006 mein bana tha browser differences handle karne ke liye
   - Sabse simple syntax, beginner-friendly

🔹 SYNTAX STYLE:
   $.ajax({
       url: url,
       type: 'POST',
       data: data,
       success: function(response) { ... },
       error: function(error) { ... }
   });

🔹 FAYDE (Pros):
   ✓ Bahut simple aur short syntax
   ✓ Cross-browser automatically handle ho jata hai
   ✓ Built-in features bahut hain (serialize, etc.)
   ✓ Error handling straightforward
   ✓ Ek hi syntax sab browsers mein

🔹 NUKSAN (Cons):
   ✗ jQuery library load karni padti hai (30KB+)
   ✗ Modern projects mein unnecessary overhead
   ✗ Native JavaScript se slow
   ✗ Maintenance: jQuery bhi maintain karna padega
   ✗ Bundle size badh jata hai

🔹 KAB USE KARE?
   - Project mein already jQuery use ho raha ho
   - Purane browsers support karna ho (easy way)
   - Legacy code maintain kar rahe ho
   - Team ko jQuery comfortable hai

🔹 REAL EXAMPLE:
   // Form submission with validation
   $('#loginForm').submit(function(e) {
       e.preventDefault();
       $.ajax({
           url: '/api/login',
           type: 'POST',
           data: $(this).serialize(),
           success: function(data) {
               window.location = '/dashboard';
           },
           error: function() {
               alert('Login failed!');
           }
       });
   });


═══════════════════════════════════════════════════════════════════════════
📊 SIDE-BY-SIDE COMPARISON (Ek Saath Dekho)
═══════════════════════════════════════════════════════════════════════════

┌──────────────────┬─────────────────┬─────────────────┬─────────────────┐
│   Feature        │      XHR        │     Fetch       │     jQuery      │
├──────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Code Length      │  10-15 lines    │  5-8 lines      │  4-6 lines      │
│ Browser Support  │  All (IE5+)     │  Modern only    │  All (with lib) │
│ Syntax Style     │  Callback       │  Promise        │  Callback       │
│ Library Needed   │  No             │  No             │  Yes (30KB)     │
│ Error Handling   │  Complex        │  Medium         │  Easy           │
│ Progress Events  │  Yes ✓          │  No ✗           │  Yes ✓          │
│ Cancel Request   │  Easy (.abort)  │  AbortController│  Easy (.abort)  │
│ Learning Curve   │  Medium         │  Easy           │  Very Easy      │
│ Modern Projects  │  Avoid          │  Best Choice ✓  │  Avoid          │
│ Legacy Projects  │  Good ✓         │  May not work   │  Best ✓         │
└──────────────────┴─────────────────┴─────────────────┴─────────────────┘


═══════════════════════════════════════════════════════════════════════════
🎯 KAB KONSA USE KARE? (Decision Tree)
═══════════════════════════════════════════════════════════════════════════

❓ Kya tumhara project naya hai? (2020 ke baad)
   ├─ YES ➜ ✅ FETCH API use karo (Modern, clean, best practice)
   └─ NO  ➜ Aage dekho ⬇️

❓ Kya purane browsers support karne hain? (IE 10 ya neeche)
   ├─ YES ➜ XHR ya jQuery (jQuery agar project mein already ho)
   └─ NO  ➜ ✅ FETCH API use karo

❓ Kya file upload with progress bar chahiye?
   ├─ YES ➜ ✅ XHR use karo (Only XHR has upload.progress event)
   └─ NO  ➜ Fetch use karo

❓ Kya project mein already jQuery use ho raha hai?
   ├─ YES ➜ ✅ jQuery AJAX use karo (Consistency ke liye)
   └─ NO  ➜ Naya jQuery mat add karo, Fetch use karo


═══════════════════════════════════════════════════════════════════════════
💡 PRACTICAL EXAMPLES - Real World Scenarios
═══════════════════════════════════════════════════════════════════════════

SCENARIO 1: Simple API Call (Login, Signup)
   👉 BEST: Fetch API
   👉 WHY: Clean code, promises, async/await support

SCENARIO 2: File Upload with Progress Bar
   👉 BEST: XHR
   👉 WHY: Only XHR provides upload progress events

SCENARIO 3: Old Company Website (2015 se pehle bani)
   👉 BEST: jQuery AJAX
   👉 WHY: Already jQuery use ho raha hoga, consistency

SCENARIO 4: React/Vue/Angular App
   👉 BEST: Fetch API (or Axios library)
   👉 WHY: Modern stack, native support, smaller bundle

SCENARIO 5: IE 10 Support Zaruri Hai
   👉 BEST: XHR with Polyfill or jQuery
   👉 WHY: Fetch IE mein nahi chalega


═══════════════════════════════════════════════════════════════════════════
📝 MIGRATION PATH (Purane se Naye Tarike)
═══════════════════════════════════════════════════════════════════════════

2006-2015: jQuery AJAX dominant tha
   ↓
2015-2018: Fetch API aaya, adoption slow
   ↓
2018-2020: Fetch API mainstream, jQuery decline
   ↓
2020-Now: Fetch API standard, XHR legacy

💭 RECOMMENDATION 2025:
   - New Projects ➜ Fetch API ✅
   - Maintaining Old Code ➜ Keep as is (jQuery/XHR)
   - Enterprise Apps ➜ Axios library (Fetch ka better version)


═══════════════════════════════════════════════════════════════════════════
🔥 PRO TIP: Production Mein Kya Use Kare?
═══════════════════════════════════════════════════════════════════════════

Most companies use AXIOS library instead of raw Fetch:
   - Fetch ka better version
   - Automatic JSON conversion
   - Request/Response interceptors
   - Better error handling
   - Timeout built-in

Example: npm install axios
   axios.post('/api/login', {email, password})
        .then(response => console.log(response.data))
        .catch(error => console.error(error));


═══════════════════════════════════════════════════════════════════════════
✅ FINAL VERDICT (Aakhri Faisla)
═══════════════════════════════════════════════════════════════════════════

🥇 GOLD (Best):     Fetch API - Modern, clean, standard
🥈 SILVER:          XHR - When you need upload progress or IE support
🥉 BRONZE:          jQuery - Only if already in project

❌ AVOID:           Adding new jQuery just for AJAX

*/

// To test different methods, uncomment in getData() function above
