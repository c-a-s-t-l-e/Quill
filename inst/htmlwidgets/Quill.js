HTMLWidgets.widget({

  name: 'Quill',

  type: 'output',

  factory: function(el, width, height) {

    // Define shared variables for this instance
    let quill;

    // Function to create the editor
    const createEditor = function() {
      // Create the editor container
      el.innerHTML = `
        <div id="editor">
          <p>Compose your text here.</p>
          <p><br /></p>
        </div>
      `;

      // Initialize the Quill editor
      quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
        toolbar: [
            [{ "font": [] }, { "size": ["small", false, "large", "huge"] }], // custom dropdown

            ["bold", "italic", "underline", "strike"],

            [{ "color": [] }, { "background": [] }],

            [{ "script": "sub" }, { "script": "super" }],

            [{ "header": 1 }, { "header": 2 }, "blockquote", "code-block"],

            [{ "list": "ordered" }, { "list": "bullet" }, { "indent": "-1" }, { "indent": "+1" }],

            [{ "direction": "rtl" }, { "align": [] }],

            ["link", "image", "video", "formula"],

            ["clean"]
        ]
        },
      });

      // Add an event listener to send the content to R when it changes
//     quill.on('text-change', function(delta, oldDelta, source) {
//        const content = quill.root.innerHTML;
//        HTMLWidgets.sendContent({ content: content });
//      });
    };

    return {

      renderValue: function(x) {
        // Render the widget
        if (!quill) {
          // Load the Quill library and CSS
          const link = document.createElement('link');
          link.href = "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css";
          link.rel = 'stylesheet';
          document.head.appendChild(link);

          const script = document.createElement('script');
          script.src = "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js";
          script.onload = createEditor;
          document.body.appendChild(script);
        }
      },

      resize: function(width, height) {
        // Code to re-render the widget with a new size
        // For Quill, this might not be necessary, but you can add any specific resizing logic here
      }

    };
  }
});
