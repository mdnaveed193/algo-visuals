// export const codeSnippets = {
//   bubble: [
//     "for(i=0;i<n-1;i++){",
//     "  for(j=0;j<n-i-1;j++){",
//     "    if(arr[j] > arr[j+1]){",
//     "       swap(arr[j],arr[j+1]);",
//     "    }",
//     "  }",
//     "}"
//   ],

//   selection: [
//     "for(i=0;i<n-1;i++){",
//     "   min=i;",
//     "   for(j=i+1;j<n;j++){",
//     "      if(arr[j] < arr[min])",
//     "          min=j;",
//     "   }",
//     "   swap(arr[i],arr[min]);",
//     "}"
//   ],

//   insertion: [
//     "for(i=1;i<n;i++){",
//     "   key=arr[i];",
//     "   j=i-1;",
//     "   while(j>=0 && arr[j]>key){",
//     "      arr[j+1]=arr[j];",
//     "      j--;",
//     "   }",
//     "   arr[j+1]=key;",
//     "}"
//   ]
// };

export const codeSnippets = {

    bubble: {

        java: [
            "for(int i=0;i<n-1;i++){",
            "    for(int j=0;j<n-i-1;j++){",
            "        if(arr[j] > arr[j+1]){",
            "            swap(arr,j,j+1);",
            "        }",
            "    }",
            "}"
        ],

        cpp: [
            "for(int i=0;i<n-1;i++){",
            "    for(int j=0;j<n-i-1;j++){",
            "        if(arr[j] > arr[j+1]){",
            "            swap(arr[j],arr[j+1]);",
            "        }",
            "    }",
            "}"
        ],

        python: [
            "for i in range(n-1):",
            "    for j in range(n-i-1):",
            "        if arr[j] > arr[j+1]:",
            "            arr[j],arr[j+1] = arr[j+1],arr[j]"
        ]
    },

    selection: {

        java: [
            "for(int i=0;i<n-1;i++){",
            "    int min=i;",
            "    for(int j=i+1;j<n;j++){",
            "        if(arr[j]<arr[min]){",
            "            min=j;",
            "        }",
            "    }",
            "    swap(arr,i,min);",
            "}"
        ],

        cpp: [
            "for(int i=0;i<n-1;i++){",
            "    int min=i;",
            "    for(int j=i+1;j<n;j++){",
            "        if(arr[j]<arr[min])",
            "            min=j;",
            "    }",
            "    swap(arr[i],arr[min]);",
            "}"
        ],

        python: [
            "for i in range(n-1):",
            "    min_idx=i",
            "    for j in range(i+1,n):",
            "        if arr[j]<arr[min_idx]:",
            "            min_idx=j",
            "    arr[i],arr[min_idx]=arr[min_idx],arr[i]"
        ]
    }
,
    insertion: {

        java: [
            "for(int i=1;i<n;i++){",
            "    int key = arr[i];",
            "    int j = i-1;",
            "    while(j>=0 && arr[j]>key){",
            "        arr[j+1]=arr[j];",
            "        j--;",
            "    }",
            "    arr[j+1]=key;",
            "}"
        ],

        cpp: [
            "for(int i=1;i<n;i++){",
            "    int key = arr[i];",
            "    int j = i-1;",
            "    while(j>=0 && arr[j]>key){",
            "        arr[j+1]=arr[j];",
            "        j--;",
            "    }",
            "    arr[j+1]=key;",
            "}"
        ],

        python: [
            "for i in range(1,n):",
            "    key = arr[i]",
            "    j = i-1",
            "    while j>=0 and arr[j] > key:",
            "        arr[j+1] = arr[j]",
            "        j -= 1",
            "    arr[j+1] = key"
        ]
    }
};