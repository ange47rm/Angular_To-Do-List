import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" // Module imported manually
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ToDoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent          // Every component needs to be added here. CLI generated components are added automatically.
  ],
  imports: [
    BrowserModule,        // Angular Modules here
    AppRoutingModule,
    HttpClientModule,
    FormsModule      // Added manually (no auto import for modules)
  ],
  providers: [],          // Services you may want to include go in "providers"
  bootstrap: [AppComponent]
})
export class AppModule { }
