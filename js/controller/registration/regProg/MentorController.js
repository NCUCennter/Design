function mentorController($scope, $state) {




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

    $scope.DeleteAct = function (inx, person) {

        var input = {  // ประกาศตัวแปร input รับข้อมูลที่จะลบ กรณีมีสอง ID คือ PK & FK
            Activity: { mR_ID: person.mR_ID },   //PK
        };
        SweetAlert.swal({
            title: "Are you sure?",
            text: person.mR_ID,
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
             ActivityService.DelActPeriodActDet(input) //ส่งค่า delete ไปที่ server เพื่อลบ data
                 .then(function (person) {
                     SweetAlert.swal("Deleted:", person.mR_ID, "success");
                     $scope.activity.splice(inx, 1);
                 }, function (err) {

                     SweetAlert.swal("Cannot Deleted activity", person.mR_ID + " using on activity", "error");
                 })
         }
         else {
             SweetAlert.swal("Cancelled", "Your  data is safe :)", "error");
         }
     });
    }
}


function mentorAddController($scope, $modal) {
    console.log('mentorAddController');
    $scope.mentor = {};
    $scope.homeAddress = [
 {
     hA_ID: '12345678'
 },
 {
     hA_ID: '22345678'
 },
 {
     hA_ID: '32345678'
 },
    ]

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
            controller: HomeAddressModalAddCtrl
        });
        HomeIdInstance
.result
.then(function (input) {
    $scope.homeAddress.push(input);
});
    };


 
}

function mentorEditController($scope, toaster, $stateParams) {
    console.log('mentorEditController');

    var mentorID = $stateParams.mentorID;

    $scope.mentor = {
        mR_ID: mR_ID,
        mR_Code: mR_Code,
        tN_ID: tN_ID,
        mR_Fname: mR_Fnam,
        mR_Mname: mR_Mname,
        mR_Lname: mR_Lname,
        hA_ID: hA_ID,
        mR_HomeTel: mR_HomeTel,
        mR_Mobile: mR_Mobile,
        mR_Email: mR_Email,
        //mR_Date: '07-06-58 9:38',
        //mR_Man: 'myboss',
        //mR_Del: 'TRUE'
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



}


function HomeAddressModalAddCtrl($scope,$modalInstance) {

    $scope.homeAddress = {};
    var input = $scope.homeAddress;
    var status = 0;

    console.log(input);
    $scope.cancel = function () {
        $modalinstance.dismiss();
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
