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
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br /></p>
        </div>
      `;

      // Initialize the Quill editor
      quill = new Quill('#editor', {
        theme: 'snow'
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
