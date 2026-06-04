export const codeSnippets = {

    java: {

        bubble: [
            "public void bubbleSort(int[] arr) {",          //1
            "    int n = arr.length;",                      //2
            "",                                             //3
            "    for(int i = 0; i < n - 1; i++) {",        //4
            "        for(int j = 0; j < n - i - 1; j++) {",//5
            "            if(arr[j] > arr[j + 1]) {", 
            "           //swap elements at jth and j+1th index",      //6
            "                swap(arr, j, j + 1);",        //7
            "            }",                               //8
            "        }",                                   //9
            "    }",                                       //10
            "}",                                           //11
            "",                                            //12
            "private void swap(int[] arr, int i, int j) {",//13
            "    int temp = arr[i];",                      //14
            "    arr[i] = arr[j];",                        //15
            "    arr[j] = temp;",                          //16
            "}"                                            //17
        ],

        selection: [
            "public void selectionSort(int[] arr) {",      //1
            "    int n = arr.length;",                     //2
            "",                                            //3
            "    for(int i = 0; i < n - 1; i++) {",       //4
            "        int minIdx = i;",                    //5
            "",                                            //6
            "        for(int j = i + 1; j < n; j++) {",  //7
            "            if(arr[j] < arr[minIdx]) {",     //8
            "                minIdx = j;",                //9
            "            }",                              //10
            "        }",                                  //11
            "       //swap elements at ith idex and minIndx",                                            //12
            "        swap(arr, i, minIdx);",              //13
            "    }",                                      //14
            "}",                                          //15
            "",                                            //16
            "private void swap(int[] arr, int i, int j) {",//17
            "    int temp = arr[i];",                     //18
            "    arr[i] = arr[j];",                       //19
            "    arr[j] = temp;",                         //20
            "}"                                           //21
        ],

        insertion: [
            "public void insertionSort(int[] arr) {",     //1
            "    int n = arr.length;",                    //2
            "",                                            //3
            "    for(int i = 1; i < n; i++) {",          //4
            "        int key = arr[i];",                 //5
            "        int j = i - 1;",                    //6
            "",                                            //7
            "        while(j >= 0 && arr[j] > key) {",   //8
            "            arr[j + 1] = arr[j];",          //9
            "            j--;",                          //10
            "        }",                                 //11
            "",                                            //12
            "        arr[j + 1] = key;",                //13
            "    }",                                     //14
            "}"                                          //15
        ]
    },

    cpp: {

        bubble: [
            "void bubbleSort(vector<int>& arr) {",        //1
            "    int n = arr.size();",                    //2
            "",                                            //3
            "    for(int i = 0; i < n - 1; i++) {",      //4
            "        for(int j = 0; j < n - i - 1; j++) {",//5
            "            if(arr[j] > arr[j + 1]) {",     //6
            "                swap(arr[j], arr[j + 1]);", //7
            "            }",                             //8
            "        }",                                 //9
            "    }",                                     //10
            "}"                                          //11
        ],

        selection: [
            "void selectionSort(vector<int>& arr) {",    //1
            "    int n = arr.size();",                   //2
            "",                                            //3
            "    for(int i = 0; i < n - 1; i++) {",     //4
            "        int minIdx = i;",                  //5
            "",                                            //6
            "        for(int j = i + 1; j < n; j++) {",//7
            "            if(arr[j] < arr[minIdx]) {",   //8
            "                minIdx = j;",              //9
            "            }",                            //10
            "        }",                                //11
            "",                                            //12
            "        swap(arr[i], arr[minIdx]);",       //13
            "    }",                                    //14
            "}"                                         //15
        ],

        insertion: [
            "void insertionSort(vector<int>& arr) {",   //1
            "    int n = arr.size();",                  //2
            "",                                            //3
            "    for(int i = 1; i < n; i++) {",        //4
            "        int key = arr[i];",               //5
            "        int j = i - 1;",                  //6
            "",                                            //7
            "        while(j >= 0 && arr[j] > key) {",//8
            "            arr[j + 1] = arr[j];",       //9
            "            j--;",                        //10
            "        }",                               //11
            "",                                            //12
            "        arr[j + 1] = key;",             //13
            "    }",                                   //14
            "}"                                        //15
        ]
    }
};