# Quick Start Guide

## To View Your Website Right Now

1. Open your file browser (Finder on Mac)
2. Navigate to the `Phoebe-s-Website` folder
3. Double-click on `index.html`
4. Your website will open in your default browser!

## First Steps to Customize

### Step 1: Update Your Personal Info (5 minutes)

Open [about.html](about.html) and replace:
- `[Your Age]` with your actual age
- `[Your City, State]` with where you live

Open [contact.html](contact.html) and update:
- Your email address
- Your phone number
- Your location
- Your social media links

### Step 2: Add Your First Photo Album (15 minutes)

1. Create a new folder called `images` inside `Phoebe-s-Website`
2. Add some photos to this folder
3. Open [script.js](script.js)
4. Find the `albumsData` section (starts at line 3)
5. Update one of the sample albums with your real photos:

Replace this:
```javascript
src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Photo+1"
```

With this:
```javascript
src: "images/your-photo-name.jpg"
```

6. Update the title, date, and description for each photo
7. Save the file and refresh your browser!

### Step 3: Test Everything

1. Click through all the pages
2. Try clicking on an album
3. Click on a photo to see the detail view
4. Test the "Like" button
5. Test the "Subscribe" button
6. Try copying a photo link
7. View on your phone to see the responsive design

## Adding More Albums

To add a new year (like 2025):

1. Open [script.js](script.js)
2. Copy one of the existing album objects (from `{` to `}` including all photos)
3. Paste it at the top of the `albumsData` array
4. Change the `id` to a new unique number
5. Change the `year` to your new year
6. Update the cover image
7. Add your photos!

## Need Help?

Check the full [README.md](README.md) for detailed instructions on:
- Photo organization tips
- Color scheme customization
- Adding interactive features
- Understanding how everything works

## Common Issues

**Photos not showing?**
- Make sure the image path is correct
- Check that images are in the `images` folder
- Use forward slashes: `images/photo.jpg` not `images\photo.jpg`

**Website looks broken?**
- Make sure all files are in the same folder
- Try refreshing your browser (Cmd+R on Mac, Ctrl+R on Windows)
- Check browser console for errors (F12 key)

**Changes not appearing?**
- Save your files before refreshing
- Try a "hard refresh": Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

## Pro Tips

1. Keep image file sizes reasonable (under 2MB each) for faster loading
2. Use descriptive file names: `2024-summer-beach.jpg` not `IMG_1234.jpg`
3. Write personal, meaningful descriptions for each photo
4. Back up your website folder regularly!

---

Have fun building your life journey website!
