from flask import render_template_string

@app.route('/page')
def page():
    name = request.args.get('name', 'Guest')
    return render_template_string(f'Hello { name }!')

@app.route('/greet')
def greet():
    template = request.args.get('template')
    return render_template_string(template)
