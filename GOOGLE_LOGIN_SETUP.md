# 🔐 Google Login Setup Guide

This guide will help you set up real Google OAuth authentication for your Thai Fortune Card app.

## 🚀 Quick Start (Demo Mode)

The app currently runs in **demo mode** and simulates Google login for testing purposes. To enable real Google authentication, follow the steps below.

## ⚙️ Production Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google+ API** and **Google Sign-In API**

### Step 2: Configure OAuth 2.0

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > OAuth 2.0 Client IDs**
3. Select **Web application**
4. Add your domains to **Authorized JavaScript origins**:
   - `http://localhost:8000` (for local development)
   - `https://yourdomain.com` (for production)
5. Add your redirect URIs to **Authorized redirect URIs**:
   - `http://localhost:8000`
   - `https://yourdomain.com`

### Step 3: Get Your Client ID

1. Copy the **Client ID** from the credentials page
2. It should look like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`

### Step 4: Update Your App

1. Open `script.js`
2. Find the line: `this.googleClientId = "YOUR_GOOGLE_CLIENT_ID_HERE";`
3. Replace with your actual Client ID:
   ```javascript
   this.googleClientId = "123456789-abcdefghijklmnop.apps.googleusercontent.com";
   ```
4. Change demo mode to production:
   ```javascript
   this.demoMode = false; // Set to false for production
   ```

### Step 5: Test Your Setup

1. Restart your local server
2. Open the login modal
3. Click "Continue with Google"
4. You should see the real Google OAuth popup

## 🔧 Configuration Variables

In `script.js`, you can configure these settings:

```javascript
class UserManager {
    constructor() {
        // Your Google OAuth 2.0 Client ID
        this.googleClientId = "YOUR_CLIENT_ID_HERE";
        
        // Set to false when you have a real client ID
        this.demoMode = true;
    }
}
```

## 🛡️ Security Considerations

1. **Never commit your Client ID to public repositories**
2. **Use environment variables for production**
3. **Always use HTTPS in production**
4. **Restrict your OAuth origins and redirects**

## ✅ Features Included

- ✅ Google OAuth 2.0 integration
- ✅ User profile management
- ✅ Automatic user data sync
- ✅ Secure session handling
- ✅ Demo mode for development
- ✅ Error handling and fallbacks

## 🐛 Troubleshooting

### Common Issues:

1. **"Invalid origin" error**
   - Add your domain to Authorized JavaScript origins

2. **"Popup blocked" error**
   - Ensure popups are allowed for your domain

3. **"Client ID not found" error**
   - Verify your Client ID is correct
   - Check that the Google Sign-In API is enabled

4. **Demo mode stuck**
   - Set `this.demoMode = false` in the constructor
   - Ensure you have a valid Client ID

## 📚 Additional Resources

- [Google Sign-In Documentation](https://developers.google.com/identity/gsi/web)
- [Google Cloud Console](https://console.cloud.google.com/)
- [OAuth 2.0 Best Practices](https://developers.google.com/identity/protocols/oauth2)

## 🎯 Next Steps

After setting up Google login, you might want to:

1. Add additional OAuth providers (Facebook, LINE)
2. Implement server-side authentication
3. Add user role management
4. Set up data synchronization with a backend
5. Implement user preferences and settings sync

---

**🌟 Happy coding! May your fortune cards bring users joy and your OAuth flow be bug-free!** 🔮 