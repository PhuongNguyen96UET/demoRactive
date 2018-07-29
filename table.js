var ractive, students;
students = [
    { name: 'Phuong', dob: '1996/31/05',     major: 'CNTT',    mark: '8' },
    { name: 'Mai',      dob: '1996/02/11',   major: 'HTTT',      mark: '9' },
    { name: 'Quynh',      dob: '1996/12/07',   major: 'MTT',      mark: '6' },
    { name: 'Quang',      dob: '1996/16/04',   major: 'CNTT',      mark: '7' }
  ];
  
  ractive = new Ractive({
    target: '#target_table',
    template: '#template_table',
    data: { students: students },
    partials: {
        students: students
    },
    addStudent: function(name, dob, major, mark) {
        
        this.push('students', {
            name: name,
            dob: dob,
            major: major,
            mark: mark,
        });
    },

    removeStudent: function (index){
        this.splice('students', index, 1);
    },

    editStudent: function (index) {

    },

    on: {
        newTodo: function (name, dob, major, mark){
            this.addStudent(name.node.value, dob.node.value, major.node.value, mark.node.value );
            name.node.value = '';
            dob.node.value = '';
            major.node.value = '';
            mark.node.value = '';
            setTimeout( function (){
                name.node.focus();
                dob.node.focus();
                major.node.focus();
                mark.node.focus();
            })
        },
        edit: function ( ctx ) {
            var keydownHandler, blurHandler, input, currentDescription;
        
            currentDescription = ctx.get( '.description' );
                ctx.set( '.editing', true );
        
            input = this.find( '.edit' );
            input.select();
            input.currentDescription = currentDescription;
          }
    }
  });
  ractive.on('add', function(){
    var name = this.get("name");
    var dob = this.get("dob");
    var major = this.get("major");
    var mark = this.get("mark");
    students.push({name: name, dob: dob, major:major, mark:mark})
  });
  
  
