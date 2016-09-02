function mentorController($scope, $state, SweetAlert) {

    $scope.Fname = "";
    $scope.Mname = "";
    $scope.Lname = "";
    $scope.M_ID = "";

    $scope.mentor = [
    {
        mR_ID: '2558001',
        mR_Code: '2568945785621',
        tN_ID: '1',
        mR_Fname: 'นิภาดา',
        mR_Mname: 'อิน',
        mR_Lname: 'ทรอินทร์',
        hA_ID: '12556585965',
        mR_HomeTel: '022-2525555',
        mR_Mobile: '090-12525555',
        mR_Email: 'aton@outlook.co.th',
        mR_Date: '07-06-58 9:38',
        mR_Man: 'myboss',
        mR_Del: 'TRUE'
    },
    {
        mR_ID: '2558002',
        mR_Code: '123456456',
        tN_ID: '2',
        mR_Fname: 'อะไร',
        mR_Mname: 'อะ',
        mR_Lname: 'อิอิ',
        hA_ID: '12131321',
        mR_HomeTel: '087-54412546',
        mR_Mobile: '055-54546231',
        mR_Email: 'a@a.com',
        mR_Date: '08-07-58 10:38',
        mR_Man: 'admin',
        mR_Del: 'TRUE'
    },

        {
            mR_ID: '2558003',
            mR_Code: '545613124',
            tN_ID: '3',
            mR_Fname: 'ทดสอบ',
            mR_Mname: 'เทส',
            mR_Lname: 'เทสเทส',
            hA_ID: '55114564',
            mR_HomeTel: '095-5451231213',
            mR_Mobile: '011-456451324',
            mR_Email: 'b@b.com',
            mR_Date: '11-06-59 22:38',
            mR_Man: 'guest',
            mR_Del: 'FALSE'
        }
    ];

    
    $scope.goEDIT = function (ID) {

        $state.go('cc.mentor-editmentor', { mentorID: ID });
    }

    $scope.Filter = new Object();

    $scope.goAdd = function () {
        $state.go('cc.mentor-addmentor');
    }

    $scope.del = function () {

        var status = 0;


    }

    $scope.DeleteAct = function ($index, person) {

        SweetAlert.swal({
            title: "Are you sure?",
            text: person.mR_ID + " " + person.mR_Lname,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel !",
            closeOnConfirm: false,
            closeOnCancel: false
        },
     function (isConfirm) {
         if (isConfirm) {
             var Deleter = function(person){
                 SweetAlert.swal("Deleted:", person.mR_ID, "success");
                 $scope.mentor.splice($index, 1);
             }, function (err) {
                 SweetAlert.swal("Cannot Deleted activity", person.mR_ID + " is using ", "error");
             })
         else {
             SweetAlert.swal("Cancelled", "Your  data is safe :)", "error");
         }
     });
    }
}

//var index = array.indexOf(item);
//array.splice(index, 1);

function mentorAddController($scope, $modal, toaster) {

    //scope หลักที่ต้องแอดไป mentor
    $scope.mentor = {};

    console.log($scope.mentor);
    //อันนี้ Home Address จำลอง
    $scope.homeAddress = [
    {
        hA_ID: '12345678',
        std_ID: '1'
    },
    {
        hA_ID: '22345678',
        std_ID: '2'
    },
    {
        hA_ID: '32345678',
        std_ID: '3'
    }
    ];
    //---------------------------------------------
    //อันนี้ คำนำหน้าชื่อจำลอง
    $scope.titleName = [{
        tN_ID: 1,
        tN_NameTH: 'นาย'
    },
 {
     tN_ID: 2,
     tN_NameTH: 'นาง'
 },
  {
      tN_ID: 3,
      tN_NameTH: 'นางสาว'
  }
    ];


    //----------------------------------------
    $scope.Submit = function () {
        var input = $scope.mentor;
        console.log(input);
        var status = 0;
        status = 200;

        if (status == 200) {
            return $state.go('cc.mentor-mentor')
        }
        if (status == 400) {
            toaster.error({
                title: "Error", body: "Data Already Exist"
            });
        }


    }

    // { MR_Code = "1684471530012", TN_ID = 2, MR_FName = "เจริญชัย", MR_MName = "ชัย", MR_LName = "เมืองทอง", HA_ID = "1552458458", MR_HomeTel = "054-1245411", MR_Mobile = "087-4114214", MR_Man = "myboss", MR_Del = false, MR_Email = "jaa@hotmail.com" };
    //ส่วนนี้ใช้กับ modal
    $scope.openAddHomeID = function () {
        var HomeIdInstance = $modal.open({
            templateUrl: 'views/co-corp/mentor/home-add.html',
            controller: HomeAddressModalAddCtrl,
            resolve: {
                Province: function () {
                    var Pro = [{
                        pV_ID: '1',
                        pV_NameTH: 'Chiangmai'
                    },
                  {
                      pV_ID: '2',
                      pV_NameTH: 'LP'
                  },
                  {
                      pV_ID: '3',
                      pV_NameTH: 'BKK'
                  }]
                    return Pro;
                },

                District: function () {
                    var Dis = [{
                        dT_ID: '1',
                        dT_NameTH: 'Hangdong',
                        pV_ID: '1'
                    },
                {
                    dT_ID: '2',
                    dT_NameTH: 'NongKaew',
                    pV_ID: '1'
                },
                {
                    dT_ID: '3',
                    dT_NameTH: 'Srilom',
                    pV_ID: '3'
                }]
                    return Dis;
                },

                SubDistrict: function () {
                    var Subdis =
                    [{
                        std_ID: '1',
                        std_NameTH: 'std1',
                        dT_ID: '1'
                    },
                    {
                        std_ID: '2',
                        std_NameTH: 'std2',
                        dT_ID: '2'
                    },
                    {
                        std_ID: '3',
                        std_NameTH: 'std3',
                        dT_ID: '3'
                    }]
                    return Subdis;
                }

            }

        });
        HomeIdInstance
    .result
    .then(function (input) {
        $scope.homeAddress.push(input);
    });
    }



}

function mentorEditController($scope, toaster, $stateParams, $modal, $filter) {

    var mentorID = $stateParams.mentorID;
    $scope.mentor = 
    {
        mR_ID: '2558001',
        mR_Code: '2568945785621',
        tN_ID: '1',
        mR_Fname: 'นิภาดา',
        mR_Mname: 'อิน',
        mR_Lname: 'ทรอินทร์',
        hA_ID: '12556585965',
        mR_HomeTel: '022-2525555',
        mR_Mobile: '090-12525555',
        mR_Email: 'aton@outlook.co.th',
        mR_Date: '07-06-58 9:38',
        mR_Man: 'myboss',
        mR_Del: 'TRUE'
    }
   
    var filt = $filter('filter')($scope.mentor, { mR_ID: mentorID })
        
    $scope.model = {
        mR_ID: filt.mR_ID,
        mR_Code: filt.mR_Code,
        tN_ID: filt.tN_ID,
        mR_Fname: filt.mR_Fnam,
        mR_Mname: filt.mR_Mname,
        mR_Lname: filt.mR_Lname,
        hA_ID: filt.hA_ID,
        mR_HomeTel: filt.mR_HomeTel,
        mR_Mobile: filt.mR_Mobile,
        mR_Email: filt.mR_Email,
    }

    $scope.Submit = function () {
        var input = $scope.mentor;
        console.log(input);
        var status = 0;
        status = 200;

        if (status == 200) {
            return $state.go('cc.mentor-mentor')
        }
        if (status == 400) {
            toaster.error({
                title: "Error", body: "Data has not change"
            });
        }


    }

    $scope.openAddHomeID = function () {
        var HomeIdInstance = $modal.open({
            templateUrl: 'views/co-corp/mentor/home-add.html',
            controller: HomeAddressModalAddCtrl,
            resolve: {
                Province: function () {
                    var Pro = [{
                        pV_ID: '1',
                        pV_NameTH: 'Chiangmai'
                    },
                  {
                      pV_ID: '2',
                      pV_NameTH: 'LP'
                  },
                  {
                      pV_ID: '3',
                      pV_NameTH: 'BKK'
                  }]
                    return Pro;
                },

                District: function () {
                    var Dis = [{
                        dT_ID: '1',
                        dT_NameTH: 'Hangdong',
                        pV_ID: '1'
                    },
                {
                    dT_ID: '2',
                    dT_NameTH: 'NongKaew',
                    pV_ID: '1'
                },
                {
                    dT_ID: '3',
                    dT_NameTH: 'Srilom',
                    pV_ID: '3'
                }]
                    return Dis;
                },

                SubDistrict: function () {
                    var Subdis =
                    [{
                        std_ID: '1',
                        std_NameTH: 'std1',
                        dT_ID: '1'
                    },
                    {
                        std_ID: '2',
                        std_NameTH: 'std2',
                        dT_ID: '2'
                    },
                    {
                        std_ID: '3',
                        std_NameTH: 'std3',
                        dT_ID: '3'
                    }]
                    return Subdis;
                }

            }

        });
        HomeIdInstance
    .result
    .then(function (input) {
        $scope.homeAddress.push(input);
    });
    }
}
    



    




function HomeAddressModalAddCtrl($scope, $modalInstance, Province, District, SubDistrict, $filter, toaster) {
   
    $scope.Province = Province;
    $scope.District = District;
    $scope.SubDistrict = SubDistrict;
  
    //สร้างสโคปรับค่าก่อย อิอิ
    $scope.ha = {}

    $scope.changepv = function (prov) {
        var dt = $filter('filter')(District, { pV_ID: prov });
        $scope.District = dt;
    }
    
    $scope.$watch('ha.province', function (newvalue, oldvalue) {
     
        $scope.ha.district = null;
    });


    $scope.changedt = function (dist) {
        var sdt = $filter('filter')(SubDistrict, { dT_ID: dist });
        $scope.SubDistrict = sdt;
    }

    $scope.$watch('ha.district', function (newvalue, oldvalue) {
        $scope.homeAddress.sdt_ID = null;
    });

 

    $scope.homeAddress = {};
    var input = $scope.homeAddress;
    var status = 0;

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
    $scope.Submit = function () {


        if (status == 200) {
            $modalInstance.close(input);
        }

        if (status == 400) {
            toaster.error({
                title: "Error", body: "Check Your Field"
            });
        }

    }



}

angular
    .module('inspinia')
    .controller('mentorController', mentorController)
    .controller('mentorAddController', mentorAddController)
    .controller('mentorEditController', mentorEditController)
    .controller('HomeAddressModalAddCtrl', HomeAddressModalAddCtrl);
