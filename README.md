### 🧩 **Inheritance in JavaScript**

---

#### 1. **Avoiding Code Duplication (DRY Principle)**

🚫 **Don't Repeat Yourself** — Initial code shows duplicate methods for `me` and `you`, which is inefficient.
We can eliminate this redundancy by using inheritance! ✨

---

#### 2. **Using a Class to Encapsulate Behavior**

📦 **Classes** allow us to define methods once, and objects created from them will **inherit** those methods automatically.
Example:

```javascript
class Person {
  talk() {
    return "Talking";
  }
}
```

Now, `he` and `she` inherit `talk()`! 🎉

---

#### 3. **Prototype Inheritance**

🧠 Methods inside the class are added to the **prototype**, meaning all instances share them.
Modifying `Person.prototype` changes the method for **all** instances.

Example:

```javascript
Person.prototype.talk = function() {
  return "Updated Talking";
};
```

This updates the `talk()` method for all `Person` objects! 🔄

---

#### 4. **Subclassing with `extends`**

🦸‍♀️ **`extends`** allows one class to **inherit** from another.
Example:

```javascript
class SuperHuman extends Person {
  fly() {
    return "Flying";
  }
}
```

`SuperHuman` inherits `talk()` from `Person` and adds its own `fly()` method! 🦸‍♂️

---

#### 5. **Inheritance with `Object.create` & `Object.setPrototypeOf`**

🔄 **`Object.create()`** creates a new object that inherits from a specified prototype.
🔧 **`Object.setPrototypeOf()`** allows you to set or change an object's prototype at runtime.

Example:

```javascript
const me = Object.create(person); // Inherits from 'person'
```

Or:

```javascript
Object.setPrototypeOf(me, person); // Set prototype explicitly
```

---

### 🚀 **Summary**

* **Inheritance** allows objects/classes to share behavior via prototypes.
* Use **classes** and **`extends`** for clear, efficient subclassing.
* **`Object.create`** and **`Object.setPrototypeOf`** are alternative ways to manage inheritance.
