# Phoebe's Life Journey Website

A beautiful, interactive personal blog website organized as a photo journal with albums by year. This website showcases memories through photos with descriptions, allowing visitors to like pictures, subscribe to albums, and share specific moments.

## Features

- **Professional Landing Page**: Welcoming logo page with smooth animations
- **About Page**: Personal introduction, age, location, and website purpose
- **Blog/Albums Page**: Main section with albums organized by year (iOS Photos app style)
- **Contact Page**: Complete contact information and message form
- **Interactive Features**:
  - Subscribe to albums
  - Like individual photos
  - Share photos via unique links
  - Photo card popups with descriptions and additional images
  - Responsive design for desktop, tablet, and mobile
- **Color Scheme**: Orange, dark purple, dark indigo, and red
- **User-Friendly**: Easy-to-read fonts and intuitive navigation

## File Structure

```
Phoebe-s-Website/
├── index.html          # Landing page with logo
├── about.html          # About me page
├── blog.html           # Main blog/albums page
├── contact.html        # Contact information page
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality and data
└── README.md           # This file
```

## Getting Started

1. **Open the Website**: Simply open `index.html` in any web browser to start
2. **Navigate**: Click "Enter" to go to the About page, then use the navigation menu to explore

## Customization Guide

### 1. Update Personal Information

**About Page** ([about.html](about.html)):
- Line 21: Replace `[Your Age]` with your age
- Line 22: Replace `[Your City, State]` with your location
- Lines 27-35: Customize your purpose and intent text

**Contact Page** ([contact.html](contact.html)):
- Line 26: Update email address
- Line 33: Update phone number
- Line 40: Update location
- Lines 47-49: Add your social media links

### 2. Add Your Photos and Albums

**Edit the Data** ([script.js](script.js)):

The sample data structure starts at line 2. Each album follows this format:

```javascript
{
    id: 1,                    // Unique album ID
    year: "2024",             // Year for the album
    coverImage: "path/to/cover.jpg",  // Album cover image
    photoCount: 12,           // Number of photos
    photos: [
        {
            id: 1,            // Unique photo ID
            src: "path/to/photo.jpg",  // Photo source
            title: "Photo Title",
            date: "Month Day, Year",
            description: "Your description here",
            likes: 0,
            additionalPhotos: ["path/to/extra1.jpg", "path/to/extra2.jpg"]
        }
    ]
}
```

**Steps to Add Your Content**:
1. Create a folder named `images` in your website directory
2. Add your photos to this folder (organized by year if you prefer)
3. Update the `albumsData` array in [script.js](script.js) with your albums
4. Replace placeholder image URLs with your actual image paths
   - Example: `src: "images/2024/summer.jpg"`

### 3. Customize Colors

If you want to adjust the color scheme, edit the CSS variables in [styles.css](styles.css) (lines 2-11):

```css
:root {
    --orange: #FF8C00;
    --dark-purple: #4B0082;
    --dark-indigo: #2E0854;
    --red: #DC143C;
}
```

### 4. Modify the Logo/Landing Page

Edit [index.html](index.html):
- Line 11: Change the main title
- Line 12: Change the subtitle

## How Interactive Features Work

### Subscribe to Albums
- Click the "Subscribe" button when viewing an album
- Subscriptions are saved in browser's localStorage
- Button changes to "Subscribed" when active

### Like Photos
- Click the heart button on any photo detail view
- Likes are saved and counted
- Heart turns red when liked

### Share Photos
- Each photo has a unique shareable link
- Click "Copy Link" to copy to clipboard
- Anyone with the link can view that specific photo

## Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop** (>768px): Full layout with side-by-side content
- **Tablet** (768px-480px): Adjusted grid layouts, collapsible menu
- **Mobile** (<480px): Single column, optimized touch targets

## Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

1. **Image Sizes**: Use high-quality images (recommended: 1200px wide for main photos)
2. **Image Format**: JPG for photos, PNG for graphics with transparency
3. **File Names**: Use simple names without spaces (e.g., `summer-beach.jpg`)
4. **Descriptions**: Write meaningful descriptions that tell the story behind each photo
5. **Organization**: Keep photos organized in folders by year

## Adding More Years

To add a new year/album:

1. Open [script.js](script.js)
2. Add a new album object to the `albumsData` array following the existing format
3. The albums automatically sort by year (newest first)

Example:
```javascript
{
    id: 4,
    year: "2025",
    coverImage: "images/2025/cover.jpg",
    photoCount: 10,
    photos: [ /* your photos here */ ]
}
```

## Future Enhancements

Consider adding:
- Backend server to store data permanently
- User authentication for private albums
- Comments on photos
- Search functionality
- Photo upload interface
- Export albums feature

## Support

For issues or questions about customizing your website, refer to this README or check the inline comments in the code files.

## License

This is your personal website - feel free to customize it however you like!

---

**Enjoy sharing your life's journey!**
