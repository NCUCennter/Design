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
            mR_FName: 'ทดสอบ',
            mR_MName: 'เทส',
            mR_LName: 'เทสเทส',
            hA_ID: '55114564',
            mR_HomeTel: '095-5451231213',
            mR_Mobile: '011-456451324',
            mR_Email: 'b@b.com',
            mR_Date: '11-06-59 22:38',
            mR_Man: 'guest',
            mR_Del: 'FALSE'
        }
    ];

    $scope.goEDIT = function () {
        $state.go('cc.mentor-editmentor');
    }

    $scope.Filter = new Object();

    $scope.goAdd = function () {
        $state.go('cc.mentor-addmentor');
    }
}

function mentorAddController($scope) {
    console.log('mentorAddController');

    $scope.additemmentor = function () {
        $scope.mentor.push({
            mR_ID: '',
            mR_CODE: '',
            tN_ID: '',
            mR_Fname: '',
            mR_Mname: '',
            mR_Lname: '',
            hA_ID: '',
            mR_HomeTel: '',
            mR_Mobile: '',
            mR_Email: '',
            mR_Date: '',
            mR_Man: '',
            mR_Del: ''
        })
    }
    $scope.mentor = [
{
    mR_ID: '2558001',
    mR_Code: '2568945785621',
    tN_ID: '1',
    mR_FName: 'นิภาดา',
    mR_MName: 'อิน',
    mR_LName: 'ทรอินทร์',
    hA_ID: '12556585965',
    mR_HomeTel: '022-2525555',
    mR_Mobile: '090-12525555',
    mR_Email: 'aton@outlook.co.th',
    mR_Date: '07-06-58 9:38',
    mR_Man: 'myboss',
    mR_Del: 'TRUE'
}];


}

function mentorEditController($scope) {
    console.log('mentorEditController');
}


angular
    .module('inspinia')
    .controller('mentorController', mentorController)
    .controller('mentorAddController', mentorAddController)
    .controller('mentorEditController', mentorEditController);

