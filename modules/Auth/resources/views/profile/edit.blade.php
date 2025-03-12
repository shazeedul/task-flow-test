<x-app-layout>
    <div class="tile">

        <div class="row justify-content-center">
            <div class="col-md-8 col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6 class="fs-17 fw-semi-bold mb-0">{{ localize('Profile') }}</h6>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('user-profile-information.update') }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <table class="table table-hover">
                                <tr>
                                    <td>
                                        <label for="name" class="mb-0">{{ localize('Name') }} <span
                                                class="text-danger">*</span></label>
                                    </td>
                                    <td>
                                        <input class="form-control input-py" id="name" type="text"
                                            name="name" value="{{ auth()->user()->name ?? old('name') }}" required>
                                        @error('name')
                                            <span class="text-danger">{{ localize($message) }}</span>
                                        @enderror
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="email" class="mb-0">{{ localize('Email') }} <span
                                                class="text-danger">*</span></label>
                                    </td>
                                    <td>
                                        <input class="form-control input-py" id="email" type="text"
                                            name="email" value="{{ auth()->user()->email }}" required>
                                        @error('email')
                                            <span class="text-danger">{{ localize($message) }}</span>
                                        @enderror
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="phone" class="font-black">{{ localize('Phone') }}</label>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control arrow-hidden" name="phone"
                                            id="phone" placeholder="{{ localize('Enter phone') }}"
                                            value="{{ auth()->user()->phone }}" required>
                                        @error('phone')
                                            <p class="text-danger pt-2">{{ $message }}</p>
                                        @enderror
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label for="gender" class="font-black">{{ localize('Gender') }}</label>
                                    </td>
                                    <td>
                                        <select class="form-control show-tick" name="gender" id="gender" required>
                                            <option selected disabled>--{{ localize('Select Gender') }}--</option>
                                            @foreach (App\Models\User::genderList() as $gender)
                                                <option {{ selected(auth()->user()->gender, $gender) }}>
                                                    {{ $gender }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('gender')
                                            <p class="text-danger pt-2">{{ $message }}</p>
                                        @enderror
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="age" class="font-black">{{ localize('Age') }}</label>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control arrow-hidden" name="age"
                                            id="age" placeholder="{{ localize('Enter your age') }}"
                                            value="{{ auth()->user()->age }}" required>
                                        @error('age')
                                            <p class="text-danger pt-2">{{ $message }}</p>
                                        @enderror
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="address" class="font-black">{{ localize('Address') }}</label>
                                    </td>
                                    <td>
                                        <textarea name="address" id="address" class="form-control" placeholder="{{ localize('Enter your address') }}"
                                            required>{{ auth()->user()->address }}</textarea>
                                        @error('address')
                                            <p class="text-danger pt-2">{{ $message }}</p>
                                        @enderror
                                    </td>
                                </tr>
                            </table>
                            <div class="row">
                                <div class="col-md-12 text-center mt-5">
                                    <button type="submit" class="btn btn-success input-py float-right">
                                        {{ localize('Update') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @push('css')
        <link href="{{ module_asset('Auth/css/profile.min.css') }}" rel="stylesheet">
    @endpush
</x-app-layout>
