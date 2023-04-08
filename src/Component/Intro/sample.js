

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}
.social-icon-s {
  color: var(--orange-yellow-crayola);
}
.contacts-list {
  display: flex;
  gap: 0.5rem;
  margin-left: -20.5px;
  margin-top: 5%;
}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}
.icon-box ion-icon {
  --ionicon-stroke-width: 45px;
}
.headings-container h1 {
  font-size: 2.25rem;
}
.headings-container h1::before,
.headings-container h1::after {
  font-size: 3rem;
  margin: 0 0.25rem;
}
.skills-charts {
  margin-top: -1rem;
  margin-left: 50px;

}
