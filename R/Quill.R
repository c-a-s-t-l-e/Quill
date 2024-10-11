#' Quill
#'
#' Loads a Quill editor
#'
#' @import htmlwidgets
#' @import htmltools
#'
#' @export
Quill <- function(message, width = NULL, height = NULL, elementId = NULL) {

  # Define the HTML content
  html <- tags$div(
    id = "editor",
    tags$p("Hello World!"),
    tags$p("Some initial", tags$b("bold"), "text"),
    tags$p()
  )

  # Create the widget
  htmlwidgets::createWidget(
    name = "Quill",
    x = list(message = "Hello, Quill!"),
    width = NULL,
    height = NULL,
    package = "Quill",
  )
}

#' Shiny bindings for Quill
#'
#' Output and render functions for using Quill within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a Quill
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name Quill-shiny
#'
#' @export
QuillOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'Quill', width, height, package = 'Quill')
}

#' @rdname Quill-shiny
#' @export
renderQuill <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, QuillOutput, env, quoted = TRUE)
}
