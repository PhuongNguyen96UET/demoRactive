var ractive = new Ractive({
    target: '#target_title',
    template: '#template_title',
    data:{
        student: {
            name: 'Phuong',
            dob: '1996/31/05',
            major: 'CNTT',
            mark: 8
        }
    }
  });