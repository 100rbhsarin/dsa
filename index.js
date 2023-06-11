

// question no 33. Search in Rotated Sorted Array



var search = function(nums, target) {
     if(nums.length == 0 || nums == null) return -1;

    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]>nums[right]){
            left = mid+1;
        }else{
            right = mid;
        }
    }

    let pivot = left;
    left = 0;
    right = nums.length-1;

    if(nums[pivot]<=target && target <= nums[right]){
        left = pivot;
    }else{
        right = pivot;
    }

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] == target){
            return mid;
        }
        if(nums[mid]<target){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return -1;

};


// 1  This code appears to be an implementation of binary search in a rotated sorted array to find a target value. Let's go through the code step by step:

// 2 The first line checks if the input array nums is empty or null. If it is, the function immediately returns -1.

// 3 Two variables, left and right, are initialized. left is set to 0, and right is set to the index of the last element in the nums array (nums.length-1).

// 4 The while loop is used to find the pivot element, which is the index where the array is rotated. The loop continues until left is less than right. Inside the loop, the midpoint index mid is calculated by taking the floor division of the sum of left and right divided by 2 (Math.floor((left+right)/2)).

// 5 The if statement checks if the element at the midpoint nums[mid] is greater than the element at the right end nums[right]. If it is, it means the pivot element lies to the right of mid, so left is updated to mid+1. Otherwise, the pivot element lies to the left or is the same as mid, so right is updated to mid.

// 6 Once the while loop ends, the left variable holds the index of the pivot element.

// 7 The code then resets left and right to perform a binary search for the target value. left is set to 0, and right is set to the index of the last element in the nums array.

// 8 An if-else statement is used to determine whether the target value lies between the pivot element and the last element of the array or not. If it does, left is updated to the pivot index. Otherwise, right is updated to the pivot index.

// 9 Another while loop is used to perform binary search within the narrowed range between left and right. The loop continues until left is less than or equal to right. Inside the loop, the midpoint index mid is calculated using the same formula as before.

// 10 The first if statement checks if the element at the midpoint nums[mid] is equal to the target value. If it is, the function returns the index mid.

// 11 The next if-else statement updates left or right based on whether the midpoint element is less than or greater than the target value, respectively. This narrows down the search range for the next iteration.

// 12 If the target value is not found within the while loop, the function returns -1.

// In summary, this code performs a binary search in a rotated sorted array to find a target value. The rotation of the array is handled by finding the pivot element, and then the binary search is performed within the appropriate range.
